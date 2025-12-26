import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

import userAvatar from "../../assets/user.jpg";
import dog2 from "../../assets/dog2.jpg";
import dog5 from "../../assets/dog5.jpg";
import loraImg from "../../assets/lora.jpg";
import cat3 from "../../assets/cat3.jpg";

type Animal = {
  id: number;
  name: string;
  age?: string;
  gender?: string;
  location?: string;
  breed?: string;
  size?: string;
  description?: string;
  personality?: string[];
  health?: string[];
  image: string;
};

type User = {
  name: string;
  birthDate: string;
  location: string;
  job: string;
};

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState<string>(userAvatar);

  const [user, setUser] = useState<User>({
    name: "User 11111",
    birthDate: "12/05/1995",
    location: "Sahline, Monastir, Tunisia",
    job: "Software Engineer",
  });

  const [animals, setAnimals] = useState<Animal[]>([
    {
      id: 1,
      name: "Lora",
      age: "2 months",
      gender: "Female",
      location: "Ariana, Tunisia",
      breed: "Domestic Shorthair",
      size: "Small",
      description: "Lora is a friendly cat that loves to play with children.",
      personality: ["Friendly", "Playful", "Affectionate", "Curious"],
      health: ["Vaccinated", "Sterilized", "De-wormed"],
      image: loraImg,
    },
    { id: 2, name: "Koukou", age: "1 year", image: cat3 },
    { id: 3, name: "Simba", age: "5 months", image: dog2 },
    { id: 4, name: "Bella", age: "3 months", image: dog5 },
  ]);

  const [showAnimalModal, setShowAnimalModal] = useState<boolean>(false);
  const [editingAnimal, setEditingAnimal] = useState<Animal | null>(null);
  const [animalForm, setAnimalForm] = useState<Partial<Animal>>({});

  const [showUserModal, setShowUserModal] = useState<boolean>(false);
  const [userForm, setUserForm] = useState<User>(user);

  const openUserModal = () => {
    setUserForm(user);
    setShowUserModal(true);
  };

  const closeUserModal = () => setShowUserModal(false);
  const handleUserSubmit = () => {
    setUser(userForm);
    closeUserModal();
  };

  const openAnimalModalForCreate = () => {
    setEditingAnimal(null);
    setAnimalForm({});
    setShowAnimalModal(true);
  };

  const openAnimalModalForEdit = (animal: Animal) => {
    setEditingAnimal(animal);
    setAnimalForm(animal);
    setShowAnimalModal(true);
  };

  const closeAnimalModal = () => {
    setShowAnimalModal(false);
    setEditingAnimal(null);
    setAnimalForm({});
  };

  const handleAnimalSubmit = () => {
    if (!animalForm.name || !animalForm.image) return;
    if (editingAnimal) {
      setAnimals((prev) =>
        prev.map((a) => (a.id === editingAnimal.id ? { ...a, ...animalForm } as Animal : a))
      );
    } else {
      setAnimals((prev) => [...prev, { ...(animalForm as Animal), id: Date.now() }]);
    }
    closeAnimalModal();
  };

  const handleDeleteAnimal = (id: number) => {
    if (window.confirm("Are you sure you want to delete this animal?")) {
      setAnimals((prev) => prev.filter((a) => a.id !== id));
    }
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

 

  return (
    <div className="profile-page">
      {/* Profile header */}
      

      {/* User info card with photo on right */}
      <section className="user-info-wrapper">
        
        <div className="user-card">
  <div className="user-card-left">
    <div className="avatar-container">
      <img className="avatar" src={profileImage} alt="User" />
      <label htmlFor="profile-image-input" className="edit-icon">✏️</label>
      <input
        id="profile-image-input"
        type="file"
        accept="image/*"
        onChange={handleProfileImageChange}
        style={{ display: "none" }}
      />
    </div>
  </div>

  <div className="user-card-right">
    <p><strong><i>Name:</i></strong> {user.name}</p>
    <p><strong><i>Date of Birth:</i></strong> {user.birthDate}</p>
    <p><strong><i>Location:</i></strong> {user.location}</p>
    <p><strong><i>Job:</i></strong> {user.job}</p>
    <button className="modify-btn" onClick={openUserModal}>Modify</button>
  </div>
</div>

          
          
         
      </section>

      {/* Listings */}
      <section className="listings">
        <h2>My Listings</h2>
        <div className="cards">
          {animals.map((animal) => (
            <div key={animal.id} className="card">
              <div className="card-image-container">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="animal-img"
                  onClick={() => handleAnimalClick(animal)}
                />
                <div className="card-actions">
                  <button
                    className="card-action-btn edit-btn"
                    onClick={() => openAnimalModalForEdit(animal)}
                  >
                    ✏️
                  </button>
                  <button
                    className="card-action-btn delete-btn"
                    onClick={() => handleDeleteAnimal(animal.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
              <h3>{animal.name}</h3>
              <p>{animal.age}</p>
            </div>
          ))}

          {/* Add card */}
          <div className="add-card" onClick={openAnimalModalForCreate}>
            <div className="plus-icon">+</div>
            <p className="add-text">Add Animal</p>
          </div>
        </div>
      </section>

      {/* Modal: User edit */}
      {showUserModal && (
        <div className="modal-overlay" onClick={closeUserModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Edit User Information</h2>
            <input className="modal-input" type="text" placeholder="Name" value={userForm.name} onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}/>
            <input className="modal-input" type="text" placeholder="Date of Birth" value={userForm.birthDate} onChange={(e) => setUserForm({ ...userForm, birthDate: e.target.value })}/>
            <input className="modal-input" type="text" placeholder="Location" value={userForm.location} onChange={(e) => setUserForm({ ...userForm, location: e.target.value })}/>
            <input className="modal-input" type="text" placeholder="Job" value={userForm.job} onChange={(e) => setUserForm({ ...userForm, job: e.target.value })}/>
            <div className="modal-buttons">
              <button className="modal-cancel-btn" onClick={closeUserModal}>Cancel</button>
              <button className="modal-add-btn" onClick={handleUserSubmit}>Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Animal add/edit */}
      {showAnimalModal && (
        <div className="modal-overlay" onClick={closeAnimalModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">{editingAnimal ? "Edit Animal" : "Add New Animal"}</h2>
            <input className="modal-input" type="text" placeholder="Name" value={animalForm.name || ""} onChange={(e) => setAnimalForm({ ...animalForm, name: e.target.value })}/>
            <input className="modal-input" type="text" placeholder="Age" value={animalForm.age || ""} onChange={(e) => setAnimalForm({ ...animalForm, age: e.target.value })}/>
            <input className="modal-input" type="text" placeholder="Image URL" value={animalForm.image || ""} onChange={(e) => setAnimalForm({ ...animalForm, image: e.target.value })}/>
            <input className="modal-input" type="text" placeholder="Gender" value={animalForm.gender || ""} onChange={(e) => setAnimalForm({ ...animalForm, gender: e.target.value })}/>
            <input className="modal-input" type="text" placeholder="Location" value={animalForm.location || ""} onChange={(e) => setAnimalForm({ ...animalForm, location: e.target.value })}/>
            <input className="modal-input" type="text" placeholder="Breed" value={animalForm.breed || ""} onChange={(e) => setAnimalForm({ ...animalForm, breed: e.target.value })}/>
            <input className="modal-input" type="text" placeholder="Size" value={animalForm.size || ""} onChange={(e) => setAnimalForm({ ...animalForm, size: e.target.value })}/>
            <textarea className="modal-input" placeholder="Description" value={animalForm.description || ""} onChange={(e) => setAnimalForm({ ...animalForm, description: e.target.value })} rows={3}/>
            <div className="modal-buttons">
              <button className="modal-cancel-btn" onClick={closeAnimalModal}>Cancel</button>
              <button className="modal-add-btn" onClick={handleAnimalSubmit}>{editingAnimal ? "Update" : "Add"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
