/* picked from Tamagui Sandbox\
 https://github.com/tamagui/tamagui/blob/a4cc57455c71287cc0ef995c4f55e52452504f79/apps/kitchen-sink/src/Sandbox.tsx#L82
 */

import React, { useLayoutEffect, useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
function TimedRender(props) {
  const [start] = useState(Date.now());
  // const [oldStart, setOldstart] = useState(Date.now());
  const [end, setEnd] = useState(0);

  useEffect(() => {
    setEnd(Date.now());
    // console.log(Date.now() - start, '>>>>>>');
    // setStart(Date.now());
  }, []);

  return (
    <div style={{ marginTop: 90 }}>
      {/* <button
        onClick={() => {
          props.setCount(props.count + 1);
        }}
      >
        Press Me
      </button> */}
      {!!end && <Text style={styles.text}>Took {end - start}ms</Text>}
      {props.children}
    </div>
  );
}

const styles = StyleSheet.create({
  text: { color: 'green', marginTop: 12, fontSize: 18 },
});

export default TimedRender;
