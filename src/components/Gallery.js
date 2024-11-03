import React from "react";

function getImageUrl(person, size = 's') {
  return 'https://i.imgur.com/' + person.imageId + size + '.jpg';
}



function Avatar({ person, size=100 }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function Profile() {
    return (
      <Card>
        <Avatar
          person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
        />
        <div>multiple children</div>
      </Card>
    );
  }
  
export default function Gallery() {
  return (
    <section>
      <h1>了不起的科学家</h1>
      <Profile />
      {/* <Profile />
      <Profile /> */}
    </section>
  );
}