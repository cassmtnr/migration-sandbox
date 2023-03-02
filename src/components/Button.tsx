function Button() {
  const handleClick = () => {
    alert('senpai-kun!!');
  };

  return (
    <div className="Button">
      <button onClick={handleClick}>Press me Senpai!!</button>
    </div>
  );
}

export default Button;
