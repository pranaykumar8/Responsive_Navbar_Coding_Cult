import { Check, ChevronDown, Menu, Pencil, Plus, Trash2, X } from 'lucide-react';
import { useState } from 'react';

function Navbar({ toggleSidebar }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuItems, setMenuItems] = useState({
    Pages: ['Home', 'About', 'Services'],
    Design: ['Themes', 'Layout', 'Colors'],
    Settings: ['Profile', 'Security', 'Notifications'],
    Domain: ['Custom Domain', 'SSL', 'DNS'],
  });

  const [editMode, setEditMode] = useState(false);
  const [editableMenus, setEditableMenus] = useState({});
  const [editingMenuName, setEditingMenuName] = useState(null);
  const [tempMenuName, setTempMenuName] = useState('');

  const [hubTitle, setHubTitle] = useState('HUB PORTAL');
  const [editingHubTitle, setEditingHubTitle] = useState(false);
  const [tempHubTitle, setTempHubTitle] = useState(hubTitle);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleEditToggle = () => {
    setEditMode(true);
    setEditableMenus({ ...menuItems });
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditableMenus({});
    setEditingMenuName(null);
    setEditingHubTitle(false);
    setTempHubTitle(hubTitle);
  };

  const handleSave = () => {
    setMenuItems({ ...editableMenus });
    setEditMode(false);
    setEditingMenuName(null);
    setHubTitle(tempHubTitle);
    setEditingHubTitle(false);
  };

  const handleRenameStart = (menu) => {
    setEditingMenuName(menu);
    setTempMenuName(menu);
  };

  const handleRenameSave = () => {
    const updated = { ...editableMenus };
    if (tempMenuName !== editingMenuName) {
      updated[tempMenuName] = updated[editingMenuName];
      delete updated[editingMenuName];
    }
    setEditableMenus(updated);
    setEditingMenuName(null);
  };

  const handleItemChange = (menu, index, value) => {
    const updatedItems = [...editableMenus[menu]];
    updatedItems[index] = value;
    setEditableMenus({ ...editableMenus, [menu]: updatedItems });
  };

  const handleAddItem = (menu) => {
    const updatedItems = [...editableMenus[menu], ''];
    setEditableMenus({ ...editableMenus, [menu]: updatedItems });
  };

  const handleRemoveItem = (menu, index) => {
    const updatedItems = [...editableMenus[menu]];
    updatedItems.splice(index, 1);
    setEditableMenus({ ...editableMenus, [menu]: updatedItems });
  };

  const handleRemoveItemDirect = (menu, index) => {
    const updatedItems = [...menuItems[menu]];
    updatedItems.splice(index, 1);
    setMenuItems({ ...menuItems, [menu]: updatedItems });
  };

  const handleAddMenu = () => {
    let newKey = 'NewMenu';
    let counter = 1;
    while (editableMenus.hasOwnProperty(newKey)) {
      newKey = `NewMenu${counter++}`;
    }
    setEditableMenus({ ...editableMenus, [newKey]: [''] });
  };

  const handleRemoveMenu = (menu) => {
    const updated = { ...editableMenus };
    delete updated[menu];
    setEditableMenus(updated);
  };

  return (
    <header className="bg-gray-800 text-white flex items-center px-4 py-3 justify-between relative">
      <div className="flex items-center space-x-4">
        <button onClick={toggleSidebar} className="focus:outline-none">
          <Menu className="w-6 h-6" />
        </button>
        {editMode && editingHubTitle ? (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={tempHubTitle}
              onChange={(e) => setTempHubTitle(e.target.value)}
              className="text-white px-2 py-1 rounded"
            />
            <Check
              className="w-4 h-4 text-green-500 cursor-pointer"
              onClick={() => {
                setHubTitle(tempHubTitle);
                setEditingHubTitle(false);
              }}
            />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">{hubTitle}</span>
            {editMode && (
              <Pencil
                className="w-4 h-4 cursor-pointer"
                onClick={() => {
                  setTempHubTitle(hubTitle);
                  setEditingHubTitle(true);
                }}
              />
            )}
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-4">
        {editMode ? (
          <>
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-sm flex items-center"
            >
              <Check className="w-4 h-4 mr-1" /> Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-sm flex items-center"
            >
              <X className="w-4 h-4 mr-1" /> Cancel
            </button>
            <button
              onClick={handleAddMenu}
              className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-sm flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" /> Add Menu
            </button>
          </>
        ) : (
          <button
            onClick={handleEditToggle}
            className="ml-210 bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm flex items-center"
          >
            <Pencil className="w-4 h-4 mr-1" /> Edit
          </button>
        )}
      </div>

      <div className="flex space-x-6 relative ml-6">
        {(editMode ? Object.entries(editableMenus) : Object.entries(menuItems)).map(
          ([menu, items], idx) => (
            <div key={menu + idx} className="relative">
              <button
                onClick={() => toggleDropdown(menu)}
                className="hover:underline flex items-center gap-1"
              >
                {editMode && editingMenuName === menu ? (
                  <>
                    <input
                      type="text"
                      value={tempMenuName}
                      onChange={(e) => setTempMenuName(e.target.value)}
                      className="text-white px-1 rounded"
                    />
                    <Check
                      onClick={handleRenameSave}
                      className="text-green-600 w-4 h-4 cursor-pointer"
                    />
                  </>
                ) : (
                  <>
                    {editMode ? (
                      <div className="flex items-center gap-1">
                        <span>{menu}</span>
                        <Pencil
                          className="w-3 h-3 text-white cursor-pointer"
                          onClick={() => handleRenameStart(menu)}
                        />
                      </div>
                    ) : (
                      menu
                    )}
                  </>
                )}
                <ChevronDown className="w-4 h-4" />
              </button>

              {openDropdown === menu && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-50 p-2">
                  {(editMode ? editableMenus[menu] : menuItems[menu])?.map((item, index) => (
                    <div key={index} className="flex items-center justify-between gap-2 mb-1">
                      {editMode ? (
                        <>
                          <input
                            value={item}
                            onChange={(e) =>
                              handleItemChange(menu, index, e.target.value)
                            }
                            className="border border-gray-300 px-2 py-1 rounded w-full"
                          />
                          <Trash2
                            className="w-4 h-4 text-red-500 cursor-pointer"
                            onClick={() => handleRemoveItem(menu, index)}
                          />
                        </>
                      ) : (
                        <>
                          <span className="block w-full text-left px-2 py-1">
                            {item}
                          </span>
                          <Trash2
                            className="w-4 h-4 text-red-500 cursor-pointer"
                            onClick={() => handleRemoveItemDirect(menu, index)}
                          />
                        </>
                      )}
                    </div>
                  ))}
                  {editMode && (
                    <>
                      <button
                        onClick={() => handleAddItem(menu)}
                        className="flex items-center text-sm text-blue-500 hover:underline mt-2"
                      >
                        <Plus className="w-4 h-4 mr-1" /> Add Item
                      </button>
                      <button
                        onClick={() => handleRemoveMenu(menu)}
                        className="flex items-center text-sm text-red-500 hover:underline mt-1"
                      >
                        <Trash2 className="w-4 h-4 mr-1" /> Delete Menu
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </header>
  );
}

export default Navbar;
