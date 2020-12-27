import ping from "@lolpants/pingman";
import { connect } from "async-mqtt";
import { MQTT_BROKER, PING_IP, SENSOR_NAME } from "./env.config";
import { HomeAssistant } from "./HomeAssistant";

// Async Sleep
const snooze = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const mqtt = connect(MQTT_BROKER);
const homeAssistant = new HomeAssistant(mqtt);

(async () => {
  await homeAssistant.setupSensor(SENSOR_NAME);

  while (true) {
    const response = await ping(PING_IP);
    await homeAssistant.updateSensor(SENSOR_NAME, response.alive || false);
    await snooze(5000);
  }
})();
