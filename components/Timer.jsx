import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Timer = ({onTimeUp, time}) => {
    const [seconds, setSeconds] = useState(time);

    useEffect(() => {
        let interval = null;
        if (seconds === 0) {
            if (onTimeUp) {
                onTimeUp();
            }
        }
        else{ 
            interval = setInterval(() => {
            setSeconds(seconds - 1);
            }, 1000);
        } 
        return () => clearInterval(interval);

    }, [seconds, onTimeUp]);

    return (
        <Text style={styles.timerText}>{seconds}</Text>
    );
};

const styles = StyleSheet.create({
    timerText: {
    fontSize: 48,
    },
});

export default Timer;