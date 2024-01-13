const withBorder = (WrappedComponent) => {

  return (props) => (
    <div className="border-4 ring-4 border-red-400 rounded-full">
      <WrappedComponent {...props}/>
    </div>
  );
};

export default withBorder;
