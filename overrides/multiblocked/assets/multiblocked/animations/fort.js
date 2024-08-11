function reverseKeyframes(animation) {
    // Helper function to reverse the keyframe time
    const reverseTime = (time) => -time + 8;

    Object.keys(animation.bones).forEach(boneName => {
        const bone = animation.bones[boneName];
        Object.keys(bone).forEach(transformType => {
            const keyframes = bone[transformType];
            Object.keys(keyframes).forEach(timeStamp => {
                const newTime = reverseTime(parseFloat(timeStamp)); 
                keyframes[newTime] = keyframes[timeStamp];
                delete keyframes[timeStamp];
            });
        });
    });

    return animation;
}
const thing = {
    "working-idle": {
			"animation_length": 8,
			"bones": {
				"PumpHead": {
					"rotation": {
						"0.0": {
							"vector": [0, 0, 0],
							"easing": "linear"
						},
						"0.1417": {
							"vector": [-1.5, 0, 0]
						},
						"0.2917": {
							"vector": [-10.5, 0, 0]
						},
						"0.425": {
							"vector": [-17.5, 0, 0]
						},
						"0.5667": {
							"vector": [-22.5, 0, 0]
						},
						"0.7": {
							"vector": [-28.5, 0, 0]
						},
						"0.8417": {
							"vector": [-36, 0, 0]
						},
						"0.975": {
							"vector": [-40, 0, 0]
						},
						"1.15": {
							"vector": [-38.5, 0, 0],
							"easing": "linear"
						},
						"1.325": {
							"vector": [-35.4, 0, 0]
						},
						"1.5": {
							"vector": [-32.5, 0, 0]
						},
						"1.6833": {
							"vector": [-29, 0, 0]
						},
						"1.8583": {
							"vector": [-21, 0, 0]
						},
						"2.05": {
							"vector": [-12.6, 0, 0]
						},
						"2.275": {
							"vector": [-8.12, 0, 0]
						},
						"2.5": {
							"vector": [-1.56, 0, 0]
						},
						"2.7167": {
							"vector": [0, 0, 0],
							"easing": "linear"
						},
						"2.725": {
							"vector": [0, 0, 0],
							"easing": "easeInOutExpo"
						},
						"2.9917": {
							"vector": [-1.5, 0, 0]
						},
						"3.2833": {
							"vector": [-10.5, 0, 0]
						},
						"3.55": {
							"vector": [-17.5, 0, 0]
						},
						"3.8083": {
							"vector": [-22.5, 0, 0]
						},
						"4.1083": {
							"vector": [-28.5, 0, 0]
						},
						"4.375": {
							"vector": [-36, 0, 0]
						},
						"4.6333": {
							"vector": [-40, 0, 0]
						},
						"4.9667": {
							"vector": [-38.5, 0, 0],
							"easing": "linear"
						},
						"5.3083": {
							"vector": [-35.4, 0, 0]
						},
						"5.6417": {
							"vector": [-32.5, 0, 0]
						},
						"5.9833": {
							"vector": [-29, 0, 0]
						},
						"6.3083": {
							"vector": [-21, 0, 0]
						},
						"6.7583": {
							"vector": [-12.6, 0, 0]
						},
						"7.1": {
							"vector": [-8.12, 0, 0]
						},
						"7.55": {
							"vector": [-1.56, 0, 0]
						},
						"8.0": {
							"vector": [0, 0, 0]
						}
					},
					"position": {
						"2.7167": {
							"vector": [0, 0, 0],
							"easing": "linear"
						},
						"8.0": {
							"vector": [0, 0, 0]
						}
					}
				},
				"Flywheel": {
					"rotation": {
						"0.0": {
							"vector": [360, 0, 0]
						},
						"0.8417": {
							"vector": [225, 0, 0]
						},
						"0.975": {
							"vector": [202.5, 0, 0]
						},
						"1.6833": {
							"vector": [112.5, 0, 0]
						},
						"1.8583": {
							"vector": [90, 0, 0]
						},
						"2.7167": {
							"vector": [0, 0, 0],
							"easing": "linear"
						},
						"2.725": {
							"vector": [360, 0, 0],
							"easing": "easeInOutExpo"
						},
						"4.375": {
							"vector": [225, 0, 0]
						},
						"4.6333": {
							"vector": [198.36, 0, 0]
						},
						"5.9833": {
							"vector": [110.2, 0, 0]
						},
						"6.3083": {
							"vector": [88.52, 0, 0]
						},
						"7.1": {
							"vector": [47.21, 0, 0]
						},
						"8.0": {
							"vector": [0, 0, 0]
						}
					}
				},
				"Keygen": {
					"rotation": {
						"0.0": {
							"vector": [-360, 0, 0]
						},
						"0.1417": {
							"vector": [-327.5, 0, 0]
						},
						"0.2917": {
							"vector": [-300, 0, 0]
						},
						"0.425": {
							"vector": [-265, 0, 0]
						},
						"0.5667": {
							"vector": [-242.5, 0, 0]
						},
						"0.7": {
							"vector": [-215, 0, 0]
						},
						"0.8417": {
							"vector": [-195, 0, 0]
						},
						"0.975": {
							"vector": [-180, 0, 0]
						},
						"1.15": {
							"vector": [-167.5, 0, 0]
						},
						"1.325": {
							"vector": [-155, 0, 0]
						},
						"1.5": {
							"vector": [-142.5, 0, 0]
						},
						"1.6833": {
							"vector": [-127.5, 0, 0]
						},
						"1.8583": {
							"vector": [-110, 0, 0]
						},
						"2.05": {
							"vector": [-90, 0, 0]
						},
						"2.275": {
							"vector": [-62.5, 0, 0]
						},
						"2.5": {
							"vector": [-32.5, 0, 0]
						},
						"2.7167": {
							"vector": [0, 0, 0],
							"easing": "linear"
						},
						"2.725": {
							"vector": [-360, 0, 0],
							"easing": "easeInOutExpo"
						},
						"2.9917": {
							"vector": [-327.5, 0, 0]
						},
						"3.2833": {
							"vector": [-300, 0, 0]
						},
						"3.55": {
							"vector": [-265, 0, 0]
						},
						"3.8083": {
							"vector": [-242.5, 0, 0]
						},
						"4.1083": {
							"vector": [-215, 0, 0]
						},
						"4.375": {
							"vector": [-195, 0, 0]
						},
						"4.6333": {
							"vector": [-180, 0, 0]
						},
						"4.9667": {
							"vector": [-167.5, 0, 0]
						},
						"5.3083": {
							"vector": [-155, 0, 0]
						},
						"5.6417": {
							"vector": [-142.5, 0, 0]
						},
						"5.9833": {
							"vector": [-127.5, 0, 0]
						},
						"6.3083": {
							"vector": [-110, 0, 0]
						},
						"6.7583": {
							"vector": [-90, 0, 0]
						},
						"7.1": {
							"vector": [-62.5, 0, 0]
						},
						"7.55": {
							"vector": [-32.5, 0, 0]
						},
						"8.0": {
							"vector": [0, 0, 0]
						}
					}
				},
				"Swrslvt": {
					"rotation": {
						"0.0": {
							"vector": [0, 0, 0],
							"easing": "linear"
						},
						"0.1417": {
							"vector": [1.5, 0, 0]
						},
						"0.2917": {
							"vector": [10.5, 0, 0]
						},
						"0.425": {
							"vector": [17.5, 0, 0]
						},
						"0.5667": {
							"vector": [22.5, 0, 0]
						},
						"0.7": {
							"vector": [28.5, 0, 0]
						},
						"0.8417": {
							"vector": [36, 0, 0]
						},
						"0.975": {
							"vector": [40, 0, 0]
						},
						"1.15": {
							"vector": [38.5, 0, 0],
							"easing": "linear"
						},
						"1.325": {
							"vector": [35.4, 0, 0]
						},
						"1.5": {
							"vector": [32.5, 0, 0]
						},
						"1.6667": {
							"vector": [29, 0, 0]
						},
						"1.8583": {
							"vector": [21, 0, 0]
						},
						"2.05": {
							"vector": [12.6, 0, 0]
						},
						"2.275": {
							"vector": [8.12, 0, 0]
						},
						"2.5": {
							"vector": [1.56, 0, 0]
						},
						"2.7167": {
							"vector": [0, 0, 0],
							"easing": "linear"
						},
						"2.725": {
							"vector": [0, 0, 0],
							"easing": "easeInOutExpo"
						},
						"2.9917": {
							"vector": [1.5, 0, 0]
						},
						"3.2833": {
							"vector": [10.5, 0, 0]
						},
						"3.55": {
							"vector": [17.5, 0, 0]
						},
						"3.8083": {
							"vector": [22.5, 0, 0]
						},
						"4.1083": {
							"vector": [28.5, 0, 0]
						},
						"4.375": {
							"vector": [36, 0, 0]
						},
						"4.6333": {
							"vector": [40, 0, 0]
						},
						"4.9667": {
							"vector": [38.5, 0, 0],
							"easing": "linear"
						},
						"5.3083": {
							"vector": [35.4, 0, 0]
						},
						"5.6417": {
							"vector": [32.5, 0, 0]
						},
						"5.9833": {
							"vector": [29, 0, 0]
						},
						"6.3083": {
							"vector": [21, 0, 0]
						},
						"6.7583": {
							"vector": [12.6, 0, 0]
						},
						"7.1": {
							"vector": [8.12, 0, 0]
						},
						"7.55": {
							"vector": [1.56, 0, 0]
						},
						"8.0": {
							"vector": [0, 0, 0]
						}
					}
				},
				"thing": {
					"position": {
						"0.0": {
							"vector": [0, 0, 0]
						},
						"0.1417": {
							"vector": [0, 0, 0]
						},
						"0.2917": {
							"vector": [0, 3.5, 0]
						},
						"0.425": {
							"vector": [0, 5.75, 0]
						},
						"0.5667": {
							"vector": [0, 7.5, 0]
						},
						"0.7": {
							"vector": [0, 9.63, 0]
						},
						"0.8417": {
							"vector": [0, 12.25, 0]
						},
						"0.975": {
							"vector": [0, 13.71, 0]
						},
						"1.15": {
							"vector": [0, 13.17, 0]
						},
						"1.325": {
							"vector": [0, 12.21, 0]
						},
						"1.5": {
							"vector": [0, 11.25, 0]
						},
						"1.6833": {
							"vector": [0, 9.88, 0]
						},
						"1.8583": {
							"vector": [0, 7, 0]
						},
						"2.05": {
							"vector": [0, 4, 0]
						},
						"2.275": {
							"vector": [0, 2, 0]
						},
						"2.5": {
							"vector": [0, 0, 0]
						},
						"2.7167": {
							"vector": [0, 0, 0],
							"easing": "linear"
						},
						"2.725": {
							"vector": [0, 0, 0],
							"easing": "easeInOutExpo"
						},
						"2.9917": {
							"vector": [0, 0, 0]
						},
						"3.2833": {
							"vector": [0, 3.5, 0]
						},
						"3.55": {
							"vector": [0, 5.75, 0]
						},
						"3.8083": {
							"vector": [0, 7.5, 0]
						},
						"4.1083": {
							"vector": [0, 9.63, 0]
						},
						"4.375": {
							"vector": [0, 12.25, 0]
						},
						"4.6333": {
							"vector": [0, 13.71, 0]
						},
						"4.9667": {
							"vector": [0, 13.17, 0]
						},
						"5.3083": {
							"vector": [0, 12.21, 0]
						},
						"5.6417": {
							"vector": [0, 11.25, 0]
						},
						"5.9833": {
							"vector": [0, 9.88, 0]
						},
						"6.3083": {
							"vector": [0, 7, 0]
						},
						"6.7583": {
							"vector": [0, 4, 0]
						},
						"7.1": {
							"vector": [0, 2, 0]
						},
						"7.55": {
							"vector": [0, 0, 0]
						},
						"8.0": {
							"vector": [0, 0, 0]
						}
					}
				}
			}
		}
   
}
const reversedAnimationData = reverseKeyframes(thing["working-idle"]);

// Convert the object to a JSON string with indentation for pretty-printing
const prettyPrintedData = JSON.stringify(reversedAnimationData, null, 2);

// Print the pretty-printed JSON string to the console
console.log(prettyPrintedData);