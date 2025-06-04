

import { Check, Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ navLinks, setNavLinks }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [newPageName, setNewPageName] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editedName, setEditedName] = useState('');

  const handleAddPage = () => {
    const name = newPageName.trim();
    if (name && !navLinks.includes(name)) {
      setNavLinks([...navLinks, name]);
      setNewPageName('');
    }
  };

  const handleDelete = (index) => {
    const updatedLinks = [...navLinks];
    updatedLinks.splice(index, 1);
    setNavLinks(updatedLinks);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedName(navLinks[index]);
  };

  const handleSaveEdit = () => {
    const name = editedName.trim();
    if (name && !navLinks.includes(name)) {
      const updatedLinks = [...navLinks];
      updatedLinks[editIndex] = name;
      setNavLinks(updatedLinks);
      setEditIndex(null);
      setEditedName('');
    }
  };

  return (
    <aside className="custom-sidebar">
      <div className="add-page-container">
        <input
          type="text"
          placeholder="Enter new page name"
          value={newPageName}
          onChange={(e) => setNewPageName(e.target.value)}
          className="new-page-input"
        />
        <button className="add-page-button" onClick={handleAddPage}>
          <Plus className="add-icon" />
          Add New Page
        </button>
      </div>

      <ul className="space-y-2">
        {navLinks.map((name, index) => {
          const path = `/${name.toLowerCase()}`;
          const isActive =
            location.pathname === path ||
            (name === 'Home' && location.pathname === '/');

          return (
            <li key={index} className="nav-item">
              <div className="nav-item-container">
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="edit-input"
                  />
                ) : (
                  <button
                    onClick={() => navigate(path)}
                    className={`nav-button ${isActive ? 'active' : ''}`}
                  >
                    {name}
                  </button>
                )}

                <div className="action-buttons">
                  {editIndex === index ? (
                    <button className="save-button" onClick={handleSaveEdit}>
                      <Check size={16} />
                    </button>
                  ) : (
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(index)}
                    >
                      <Pencil size={16} />
                    </button>
                  )}

                  <button
                    className="delete-button"
                    onClick={() => handleDelete(index)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
