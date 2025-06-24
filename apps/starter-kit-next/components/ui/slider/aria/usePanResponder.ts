import { PanResponder } from 'react-native';

export const usePanResponder = (props: any) => {
  const _handleStartShouldSetPanResponder = () => {
    return true;
  };

  const _handleMoveShouldSetPanResponder = () => {
    return true;
  };

  const _handlePanResponderMove = (e: Object, gestureState: Object) => {
    props.onMove(e, gestureState);
  };

  const _handlePanResponderEnd = () => {
    props.onMoveEnd();
  };

  const _handlePanResponderGrant = () => {
    props.onMoveStart();
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: _handleStartShouldSetPanResponder,
    onMoveShouldSetPanResponder: _handleMoveShouldSetPanResponder,
    onPanResponderGrant: _handlePanResponderGrant,
    onPanResponderMove: _handlePanResponderMove,
    onPanResponderRelease: _handlePanResponderEnd,
    onPanResponderTerminate: _handlePanResponderEnd,
  });

  return panResponder;
};
