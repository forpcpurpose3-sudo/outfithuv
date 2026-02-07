function App() {
  const { adminData, loading } = useContext(adminDataContext);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center text-xl">
        Checking admin session...
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      {!adminData ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      )}
    </>
  );
}
