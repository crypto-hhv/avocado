// Testnet
var providerRpcUrl = "https://sepolia.infura.io/v3/4aed6b84fbec4a9e814b937826b8d4e8";
var Address = "0xc958d9af5a95eb2c4441139ed6dc35bed470bd92";

// // Mainnet
// var providerRpcUrl = "https://mainnet.infura.io/v3/4aed6b84fbec4a9e814b937826b8d4e8";
// var Address = "0xf83390a0ec3CF4F4E4Cb32c54f1B69d8e3938056";

var ABI = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "tokensSwapped",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "ethReceived",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "tokensIntoLiquidity",
				type: "uint256",
			},
		],
		name: "SwapAndLiquify",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "buy",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [],
		name: "buyLiquidityFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "claim",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "commitForWithdrawal",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_percentForLpReward",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_winningRate",
				type: "uint256",
			},
			{
				internalType: "bool",
				name: "_lpRewardEnabled",
				type: "bool",
			},
			{
				internalType: "uint256",
				name: "_reawrdMinBuyEth",
				type: "uint256",
			},
		],
		name: "configLpReward",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		name: "contributor",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "deadAddress",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "subtractedValue",
				type: "uint256",
			},
		],
		name: "decreaseAllowance",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "emergencyLpWithdrawal",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "endTime",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "ethRaised",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				internalType: "bool",
				name: "excluded",
				type: "bool",
			},
		],
		name: "excludeFromFees",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "finalizePresale",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "hardCap",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "addedValue",
				type: "uint256",
			},
		],
		name: "increaseAllowance",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "isExcludedFromFees",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "isPresaleActive",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "isPresaleSuccessed",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "lastWinner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "maxBuy",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "minBuy",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "refund",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "sellLiquidityFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "softCap",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "startPresale",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "startTime",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "tokenForLiquidity",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "tradingActive",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "recipient",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address",
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "uniswapV2Pair",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "uniswapV2Router",
		outputs: [
			{
				internalType: "contract IUniswapV2Router02",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_buyLiquidityFee",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_sellLiquidityFee",
				type: "uint256",
			},
		],
		name: "updateLiquidityFees",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOperator",
				type: "address",
			},
		],
		name: "updateOperator",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		stateMutability: "payable",
		type: "receive",
	},
];

async function loadWeb3() {
	window.provider = new Web3.providers.HttpProvider(providerRpcUrl);
	window.web3 = new Web3(provider);
	window.contract = await new web3.eth.Contract(ABI, Address, provider);
}

function convertBigToNumber(big) {
	big = web3.utils.toBN(big);
	return big.div(web3.utils.toBN("1000000000000000")).toNumber() / 1000;
}

loadWeb3();

$(document).ready(function () {
	function loadWinnerWallet() {
		try {
			const $ele = $(".winner-text");
			if (!$ele.length) return;
			window.contract.methods
				.lastWinner()
				.call()
				.then(function (address) {
					console.log("lastWinner", address);
					if (address) $ele.text("Recent luckier: " + address);
				});
		} catch (error) {
			console.error(error);
		}
	}

	function loadEndTime() {
		try {
			const $ele = $("#presale-end-time");
			if (!$ele.length) return;
			window.contract.methods
				.endTime()
				.call()
				.then(function (endTime) {
					endTime = new Date(parseInt(endTime) * 1000);
					endTime = endTime.toISOString();
					endTime = endTime.slice(0, 10) + " " + endTime.slice(11, 16) + " UTC";
					console.log("endTime", endTime);
					$ele.text(endTime);
				});
		} catch (error) {
			console.error(error);
		}
	}

	function loadRaised() {
		try {
			const $ele = $("#presale-raised");
			if (!$ele.length) return;
			window.contract.methods
				.ethRaised()
				.call()
				.then(function (ethRaised) {
					console.log("ethRaised", ethRaised);
					$ele.text(convertBigToNumber(ethRaised));
				});
		} catch (error) {
			console.error(error);
		}
	}

	function loadHardCap() {
		try {
			const $ele = $("#presale-hard-cap");
			if (!$ele.length) return;
			window.contract.methods
				.hardCap()
				.call()
				.then(function (hardCap) {
					console.log("hardCap", hardCap);
					$ele.text(convertBigToNumber(hardCap));
				});
		} catch (error) {
			console.error(error);
		}
	}

	function loadYourContributed() {
		if (!window.ethAddress) return;
		try {
			const $ele = $("#presale-your-contributed");
			if (!$ele.length) return;
			window.contract.methods
				.contributor(window.ethAddress)
				.call()
				.then(function (amount) {
					console.log("contributor", amount);
					$ele.text(convertBigToNumber(amount));
				});
		} catch (error) {
			console.error(error);
		}
	}

	function loadMinBuy() {
		try {
			window.contract.methods
				.minBuy()
				.call()
				.then(function (minBuy) {
					console.log("minBuy", minBuy);
					window.minBuy = convertBigToNumber(minBuy);
				});
		} catch (error) {
			console.error(error);
		}
	}

	loadWinnerWallet();
	loadEndTime();
	loadRaised();
	loadHardCap();
	loadYourContributed();
	loadMinBuy();
	setInterval(function () {
		loadWinnerWallet();
		loadRaised();
		loadYourContributed();
	}, 10000);

	if ($(".presale").length && typeof window !== "undefined" && typeof window.ethereum !== undefined) {
		window.ethereum.on("accountsChanged", function (addresses) {
			const address = addresses[0];
			$("#eth-address").text(address);
			window.ethAddress = address;
			loadYourContributed();
		});

		window.ethereum.request({method: "eth_accounts"}).then(function (addresses) {
			const address = addresses[0];
			$("#eth-address").text(address);
			window.ethAddress = address;
			$("#contribute-form").removeClass("d-none");
			$("#connect-wallet").addClass("d-none");
			loadYourContributed();
		});

		$("#connect-wallet").click(function () {
			window.ethereum.request({method: "eth_requestAccounts"}).then(function (addresses) {
				const address = addresses[0];
				$("#eth-address").text(address);
				window.ethAddress = address;
				$("#contribute-form").removeClass("d-none");
				$("#connect-wallet").addClass("d-none");
				loadYourContributed();
			});
		});

		$("#input-amount").keypress(function () {
			$("#input-amount-error").text("");
		});

		$("#contribute").click(function () {
			var input = $("#input-amount").val();
			if (!input || input <= 0) return;
			input = parseFloat(input);

			if (window.minBuy && input < window.minBuy) {
				$("#input-amount-error").text("Min buy " + window.minBuy + " ETH");
				return;
			}

			window.ethereum.request({
				method: "eth_sendTransaction",
				params: [
					{
						data: window.contract.methods.buy().encodeABI(),
						from: window.ethAddress,
						to: Address,
						value: web3.utils.numberToHex(input * 1000 + "000000000000000"),
					},
				],
			});
		});
	}
});
