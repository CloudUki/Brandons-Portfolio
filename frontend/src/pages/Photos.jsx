function Photos() {
  return (
    <div className="photos-page">
      <h2>My Photography</h2>
      <div className="photo-grid">
        <img src="/photos/photo1.jpg" alt="Sample 1" />
        <img src="/photos/photo2.jpg" alt="Sample 2" />
        {/* Add more as needed */}
      </div>
    </div>
  );
}

export default Photos;
