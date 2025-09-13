import { useState } from "react";
import styles from "./SpaceMissionForm.module.css";

export default function SpaceMissionForm() {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("Mercury");
  const defaultMessage = "Please enter your name to begin your mission.";
  const message = "Astronaut " + name + " is headed to " + planet + "!";
  return (
    <div className={styles.container}>
      <h2>{name ? message : defaultMessage}</h2>
      <form className={styles.form}>
        <label htmlFor="name">Astronaut name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="Enter astronaut name"
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="planets">Choose a planet: </label>
        <select
          id="planets"
          value={planet}
          onChange={(event) => setPlanet(event.target.value)}
        >
          <option value="Mercury">Mercury</option>
          <option value="Venus">Venus</option>
          <option value="Earth">Earth</option>
          <option value="Mars">Mars</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Saturn">Saturn</option>
          <option value="Uranus">Uranus</option>
          <option value="Neptune">Neptune</option>
        </select>
      </form>
    </div>
  );
}
