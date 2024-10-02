import React, { useState, useEffect } from "react";
import '../components/OpportunitiesHub.css'; // Import the CSS file

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [newOpportunity, setNewOpportunity] = useState({
    title: "",
    company: "",
    category: "Internship",
    deadline: "",
    link: "",
    description: ""
  });
  const [showForm, setShowForm] = useState(false);

  // Load opportunities from localStorage when the component mounts
  useEffect(() => {
    const storedOpportunities = localStorage.getItem("opportunities");
    if (storedOpportunities) {
      setOpportunities(JSON.parse(storedOpportunities));
    } else {
      // If no data in localStorage, initialize with default opportunities
      const defaultOpportunities = [
        {
          id: 1,
          title: "Software Engineering Internship",
          company: "TechCorp",
          category: "Internship",
          deadline: "2024-10-15",
          link: "https://example.com/apply",
          description: "Gain experience in software development. Requirements: basic knowledge of JavaScript.",
        },
        {
          id: 2,
          title: "Data Analyst Job",
          company: "DataCorp",
          category: "Job",
          deadline: "2024-11-01",
          link: "https://example.com/apply",
          description: "Looking for an experienced data analyst. Requirements: proficiency in SQL and Python.",
        },
      ];
      setOpportunities(defaultOpportunities);
      localStorage.setItem("opportunities", JSON.stringify(defaultOpportunities));
    }
  }, []);

  // Save opportunities to localStorage whenever they are updated
  useEffect(() => {
    if (opportunities.length > 0) {
      localStorage.setItem("opportunities", JSON.stringify(opportunities));
    }
  }, [opportunities]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterCategory(e.target.value);
  };

  const filteredOpportunities = opportunities.filter((opportunity) => {
    return (
      (filterCategory === "" || opportunity.category === filterCategory) &&
      (searchTerm === "" ||
        opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opportunity.company.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const handleAddOpportunity = (e) => {
    e.preventDefault();
    const newId = opportunities.length > 0 ? opportunities[opportunities.length - 1].id + 1 : 1;
    const updatedOpportunities = [
      ...opportunities,
      { ...newOpportunity, id: newId },
    ];
    setOpportunities(updatedOpportunities);
    localStorage.setItem("opportunities", JSON.stringify(updatedOpportunities)); // Ensure it's updated in localStorage
    setShowForm(false);
    setNewOpportunity({
      title: "",
      company: "",
      category: "Internship",
      deadline: "",
      link: "",
      description: ""
    });
  };

  return (
    <div className="opportunities-container">
    <div className="headingfirst" > <h1> Opportunities Hub </h1> </div>

      {/* Search and Filter Section */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search opportunities..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <select onChange={handleFilter} value={filterCategory} className="filter-dropdown">
          <option value="">All Categories</option>
          <option value="Internship">Internships</option>
          <option value="Job">Jobs</option>
        </select>
      </div>

      {/* Button to show the Add Opportunity form */}
      <div className="add-opportunity-section">
        <button onClick={() => setShowForm(!showForm)} className="add-opportunity-btn">
          {showForm ? "Cancel" : "Add Opportunity"}
        </button>
      </div>

      {/* Add Opportunity Form */}
      {showForm && (
        <form className="opportunity-form" onSubmit={handleAddOpportunity}>
          <input
            type="text"
            placeholder="Title"
            value={newOpportunity.title}
            onChange={(e) => setNewOpportunity({ ...newOpportunity, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Company"
            value={newOpportunity.company}
            onChange={(e) => setNewOpportunity({ ...newOpportunity, company: e.target.value })}
            required
          />
          <select
            value={newOpportunity.category}
            onChange={(e) => setNewOpportunity({ ...newOpportunity, category: e.target.value })}
          >
            <option value="Internship">Internship</option>
            <option value="Job">Job</option>
          </select>
          <input
            type="date"
            value={newOpportunity.deadline}
            onChange={(e) => setNewOpportunity({ ...newOpportunity, deadline: e.target.value })}
            required
          />
          <input
            type="url"
            placeholder="Application Link"
            value={newOpportunity.link}
            onChange={(e) => setNewOpportunity({ ...newOpportunity, link: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            value={newOpportunity.description}
            onChange={(e) => setNewOpportunity({ ...newOpportunity, description: e.target.value })}
            required
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}

      {/* Opportunities List */}
      <div className="opportunities-list">
        {filteredOpportunities.length > 0 ? (
          filteredOpportunities.map((opportunity) => (
            <div key={opportunity.id} className="opportunity-card">
              <h2>{opportunity.title}</h2>
              <p><strong>Company:</strong> {opportunity.company}</p>
              <p><strong>Category:</strong> {opportunity.category}</p>
              <p><strong>Deadline:</strong> {opportunity.deadline}</p>
              <p>{opportunity.description}</p>
              <a href={opportunity.link} target="_blank" rel="noopener noreferrer" className="apply-link">
                Apply Now
              </a>
            </div>
          ))
        ) : (
          <p>No opportunities found.</p>
        )}
      </div>
    </div>
  );
};

export default Opportunities;
