import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const Animacion5 = () => {
  const [animacion] = useState(new Animated.Value(1));

  const presionarBoton = () => {
    Animated.spring(animacion, {
      toValue: 0.8,
    }).start();
  };
  const soltarBoton = () => {
    Animated.spring(animacion, {
      toValue: 1,
      friction: 4, // as bajo mayor rebote
      tension: 10, // menor numero, mas suave es el movimiento
    }).start();
  };

  const estiloAnimacion = {
    transform: [{scale: animacion}],
  };

  return (
    <View style={styles.contenedor}>
      <TouchableWithoutFeedback
        onPressIn={() => presionarBoton()}
        onPressOut={() => soltarBoton()}>
        <Animated.View style={[styles.boton, estiloAnimacion]}>
          <Text style={styles.texto}>Iniciar Sesion</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 28,
  },
  boton: {
    backgroundColor: 'cornflowerblue',
    width: 280,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Animacion5;
