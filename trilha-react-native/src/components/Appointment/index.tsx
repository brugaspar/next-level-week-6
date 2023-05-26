import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

export type GuildProps = {
  id: string;
  name: string;
  icon: any;
  owner: boolean;
}

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Appointment = RectButtonProps & {
  data: AppointmentProps
}

export function Appointment() {
  return (
    <RectButton style={styles.container}>

    </RectButton>
  );
}