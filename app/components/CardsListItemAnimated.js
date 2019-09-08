import React from 'react';
import { TouchableOpacity, Image, Animated, Text } from 'react-native';

export default class CardsListItemAnimated extends React.Component {

    state = {
        animatedValueFront: new Animated.Value(0),
        animatedValueBack: new Animated.Value(180),
        flipped: false
    }


    flip = () => {
        if (this.state.flipped) {
            Animated.timing(this.state.animatedValueFront, {
                toValue: 0,
                duration: 800
            }).start(() => this.setState({ flipped: !this.state.flipped }))
            Animated.timing(this.state.animatedValueBack, {
                toValue: 180,
                duration: 800
            }).start()
        } else {
            Animated.timing(this.state.animatedValueFront, {
                toValue: 180,
                duration: 800
            }).start(() => this.setState({ flipped: !this.state.flipped }))
            Animated.timing(this.state.animatedValueBack, {
                toValue: 0,
                duration: 800
            }).start()
        }

    }

    interpolateFront = this.state.animatedValueFront.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg']
    })

    interpolateBack = this.state.animatedValueBack.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg']
    })

    render() {
        const flipFrontAnimation = {
            transform: [{ rotateY: this.interpolateFront }]
        }
        const flipBackAnimation = {
            transform: [{ rotateY: this.interpolateBack }]
        }
        const { container, image, animatedViewBack, animatedViewFront } = styles
        const item = this.props.item
        return (
            <TouchableOpacity
                onPress={() => {
                    this.flip()
                }}
                style={container}>
                <Animated.View
                    style={[animatedViewFront, flipFrontAnimation]}>
                    <Image
                        style={[image]}
                        source={{ uri: item.card.img }} />
                </Animated.View>
                <Animated.View
                    style={[animatedViewBack, flipBackAnimation]}>
                    <Text>{`Card Name: ${item.card.name}`}</Text>
                    <Text>{`Card Set: ${item.card.cardSet}`}</Text>
                    <Text>{`Type: ${item.card.type}`}</Text>
                    <Text>{`Player Class: ${item.card.playerClass}`}</Text>
                </Animated.View>
            </TouchableOpacity >
        )
    }
}


const styles = {
    container: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 5,

    },
    animatedViewFront: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 300,
        backfaceVisibility: 'hidden',
        transfrom: [{ rotateY: '0deg' }]
    },
    animatedViewBack: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backfaceVisibility: 'hidden',
        transfrom: [{ rotateY: '180deg' }]
    },
    title: {
        margin: 10
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
}