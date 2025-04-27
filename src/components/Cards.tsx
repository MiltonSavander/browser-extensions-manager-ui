import React from "react";
import Card from "./Card";
import extensionsData from "../../data.json";

function Cards({ filterExtensionsState }) {
  const [extensions, setExtensions] = React.useState(extensionsData);

  const toggleIsActive = (extensionName) => {
    const updatedExtensions = [...extensions];
    const extensionIndex = updatedExtensions.findIndex((extension) => extension.name === extensionName);
    if (extensionIndex !== -1) {
      updatedExtensions[extensionIndex].isActive = !updatedExtensions[extensionIndex].isActive;
    }
    setExtensions(updatedExtensions);
  };

  const removeExtension = (extensionName) => {
    const updatedExtensions = extensions.filter((extension) => extension.name !== extensionName);
    setExtensions(updatedExtensions);
  };

  const filteredExtensions = extensions.filter((extension) => {
    if (filterExtensionsState === "active") {
      return extension.isActive;
    } else if (filterExtensionsState === "inactive") {
      return !extension.isActive;
    }
    return true;
  });

  return (
    <div className="cards">
      {filteredExtensions.map((extension) => (
        <Card
          key={extension.name}
          name={extension.name}
          description={extension.description}
          logo={extension.logo}
          isActive={extension.isActive}
          onClick={() => removeExtension(extension.name)}
          onSwitchChange={() => toggleIsActive(extension.name)}
        />
      ))}
    </div>
  );
}

export default Cards;
