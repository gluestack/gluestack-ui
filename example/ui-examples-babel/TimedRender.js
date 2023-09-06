/* picked from Tamagui Sandbox\
 https://github.com/tamagui/tamagui/blob/a4cc57455c71287cc0ef995c4f55e52452504f79/apps/kitchen-sink/src/Sandbox.tsx#L82
 */

import { useLayoutEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
function TimedRender(props) {
  const [start] = useState(Date.now());
  const [end, setEnd] = useState(0);

  useLayoutEffect(() => {
    setEnd(Date.now());
  }, []);

  return (
    <>
      {!!end && <Text style={styles.text}>Took {end - start}ms</Text>}
      {props.children}
    </>
  );
}

const styles = StyleSheet.create({
  text: { color: "green", marginTop: 12, fontSize: 18 },
});

export default TimedRender;
