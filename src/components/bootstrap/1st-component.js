import ProfileCard from "./card";

const BootstrapLayout = () => {
  const members = [
    {
      name: "kanna",
      color: "red",
      description: "CEO",
    },
    {
      name: "krshi",
      color: "yellow",
      description: "HR",
    },
    {
      name: "harsha",
      color: "blue",
      description: "TL",
    },
  ];

  return (
    <>
      {/* <div className="jumbotron text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <ProfileCard {...members[0]} />
          </div>
          <div className="col-sm-4">
            <ProfileCard {...members[1]} />
          </div>
          <div className="col-sm-4">
            <ProfileCard {...members[2]} />
          </div>
        </div>
      </div> */}

      <div style={{display:"flex", justifyContent:"space-around"}}>
        <ProfileCard {...members[0]} />
        <ProfileCard {...members[1]} />
        <ProfileCard {...members[2]} />
      </div>
    </>
  );
};

export default BootstrapLayout;
