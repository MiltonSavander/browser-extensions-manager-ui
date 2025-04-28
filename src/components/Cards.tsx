import React from "react";
import Card from "./Card";
import extensionsData from "../../data.json";

interface CardsProps {
  filterExtensionsState: string;
}

function Cards({ filterExtensionsState }: CardsProps) {
  const [extensions, setExtensions] = React.useState(extensionsData);

  interface Extension {
    name: string;
    description: string;
    logo: string;
    isActive: boolean;
  }

  const toggleIsActive = (extensionName: string): void => {
    const updatedExtensions: Extension[] = [...extensions];
    const extensionIndex: number = updatedExtensions.findIndex(
      (extension) => extension.name === extensionName
    );
    if (extensionIndex !== -1) {
      updatedExtensions[extensionIndex].isActive = !updatedExtensions[extensionIndex].isActive;
    }
    setExtensions(updatedExtensions);
  };

  const removeExtension = (extensionName: string): void => {
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
