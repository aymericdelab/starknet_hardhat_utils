import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@shardlabs/starknet-hardhat-plugin";

const config = {
    solidity: '0.8.9',
    starknet: {
        venv: 'active',
        network: 'main',
    },
    networks: {
        main: {
            url: 'http://127.0.0.1:5050',
        },
    },
    mocha: {
        timeout: 1000000,
    },
    paths: {
        cairoPaths: ['./lib/cairo_contracts', './lib/cairo_math_64x61'],
    },
}

export default config;
