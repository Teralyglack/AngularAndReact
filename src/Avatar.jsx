function Avatar({ name, size = 48 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: '#8b5cf6',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: size / 2,
        fontWeight: 'bold',
      }}
    >
      {name[0].toUpperCase()}
    </div>
  );
}

export default Avatar;
