import { get } from "env-var";

export const MQTT_BROKER = get("MQTT_BROKER").required().asString();
export const SENSOR_NAME = get("SENSOR_NAME").required().asString();
export const PING_IP = get("PING_IP").required().asString();
