import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

const Animacion4 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 360,
      duration: 4000,
    }).start();
  }, []);

  const intepolacion = animacion.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const estiloAnimacion = {
    transform: [{rotate: intepolacion}],
  };

  return (
    <View>
      <Animated.View style={[styles.caja, estiloAnimacion]} />
    </View>
  );
};

const styles = StyleSheet.create({
  caja: {
    width:100,
    height:100,
    backgroundColor:'cornflowerblue'
  },
});

export default Animacion4;
