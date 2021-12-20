import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../constant";
import "./style.css";

const Header = () => {
	const [load, setLoad] = useState(false);
	const [message, setMessage] = useState("");
	const [address, setAddress] = useState("");

	const TextAlert = (text) => {
		setMessage(text);
		setTimeout(() => setMessage(""), 1000);
	};
	const ValidateWalletAddress = () => {
		if (address?.length > 5) {
			setLoad(true);
			fetch(SERVER_URL + "check-address", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ address }),
			})
				.then((Res) => Res.json())
				.then((res) => {
					setLoad(false);
					if (res.status == 200) {
						// success
					}
					TextAlert(res.message);
				})
				.catch((err) => {
					setLoad(false);
					TextAlert("Internet Connection Error");
					console.log(err, "error");
				});
		} else {
			TextAlert("Please enter valid wallet address");
		}
	};

	return (
		<main>
			<section className='Home_homeIntro__2F-JN'>
				<h4>MARKETPLACE</h4>
				<h1>
					MINTLAB <br /> TOKENS
				</h1>
				<div className='container'>
					<input
						style={{ margin: "40px auto" }}
						type='text'
						placeholder='Enter Wallet Address'
						value={address}
						onChange={(e) => setAddress(e.currentTarget.value)}
						className='curve-input header-input'
					/>
					<br />
					{message.length == 0 ? (
						<button
							className='Button_button__3-u4P Button_primary__24KWs'
							onClick={() => ValidateWalletAddress()}>
							{load ? <i className='fa fa-spinner'></i> : "Mint"}
						</button>
					) : (
						<p>{message}</p>
					)}
				</div>
			</section>
		</main>
	);
};

export default Header;
