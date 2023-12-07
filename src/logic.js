const Logic = ({ handleClick, buttonsData }) => {
  return (
    <div className="container">
      {buttonsData.map((row, index) => (
        <div key={index} className="row">
          {row.map((button, index) => (
            <button
              key={index}
              className={button.className}
              onClick={() => handleClick(button.label)}
            >
              {button.label}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Logic;