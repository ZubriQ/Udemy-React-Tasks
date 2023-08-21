function ResetButton({ count, resetCount }) {
  const buttonStyle = { backgroundColor: 'lightgreen' };

  return (
    count > 0 && (
      <div>
        <button style={buttonStyle} onClick={resetCount}>
          Reset
        </button>
      </div>
    )
  );
}

export default ResetButton;
