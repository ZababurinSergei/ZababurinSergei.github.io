const commonConfig = {
    border: { type: 'line' }
};

const childCommonConfig = {
    width: '100%',
    height: 1,
    left: 0
};

const Configs = {
    playlist: {
        bgFocus: 'black',
        bgBlur: 'green',
        config: {
            ...commonConfig,
            top: 0,
            left: 0,
            width: '50%',
            height: '50%',
            scrollable: true,
            label: 'Playlist',
            style: {
                fg: 'white',
                bg: 'green',
                border: {
                    fg: '#f0f0f0'
                }
            }
        },
        childConfig: {
            ...childCommonConfig,
            fg: 'white',
            bg: 'green'
        }
    },
    queue: {
        bgFocus: 'black',
        bgBlur: 'blue',
        config: {
            ...commonConfig,
            top: 0,
            left: '50%',
            width: '50%',
            height: '20%',
            scrollable: true,
            label: 'Queue',
            style: {
                fg: 'white',
                bg: 'blue',
                border: {
                    fg: '#f0f0f0'
                }
            }
        },
        childConfig: {
            ...childCommonConfig,
            fg: 'white',
            bg: 'blue'
        }
    },
    nowPlaying: {
        config: {
            ...commonConfig,
            top: '20%',
            left: '50%',
            width: '50%',
            height: 3,
            label: 'Now Playing',
            style: {
                fg: 'white',
                bg: 'black',
                border: {
                    fg: '#f0f0f0'
                }
            }
        },
        childConfig: {
            ...childCommonConfig,
            fg: 'red',
            bg: 'black'
        }
    },
    controls: {
        config: {
            ...commonConfig,
            top: '35%',
            left: '50%',
            width: '50%',
            height: 5,
            scrollable: true,
            label: 'Controls',
            style: {
                fg: 'grey',
                bg: 'black',
                border: {
                    fg: '#000000'
                }
            }
        }
    },
    logs: {
        bgFocus: 'black',
        bgBlur: 'red',
        config: {
            ...commonConfig,
            top: '50%',
            left: 0,
            width: '100%',
            height: '50%',
            scrollable: true,
            label: 'Logs',
            style: {
                fg:'red',
                bg: 'black',
                border: {
                    fg: 'yellow'
                }
            }
        },
        childConfig: {
            ...childCommonConfig,
            fg: 'red',
            bg: 'black'
        }
    },
};

module.exports = Configs;
