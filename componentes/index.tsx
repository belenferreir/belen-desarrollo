import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  children?: ReactNode;
}

const Card = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    width: 200,
    padding: 8,
    marginBottom: 8,
  },
});

export default Card;
