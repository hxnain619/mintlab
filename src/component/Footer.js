import { LOGO } from "../constant";

const Footer = () => {
	return (
		<div className='Footer_Footer__AtGet'>
			<div className='Footer_footerBig__1Cpsd'>
				<div className='Footer_links__3LX9g'>
					<div className='Footer_title__YGI9Q'>{LOGO}</div>
					<div className='Footer_footerLinks__UyJS6'>
						<a href='/'>Home</a>
						<a href='/mint'>Mint</a>
						<div>Sell</div>
						<a href='/marketplace'>Marketplace</a>
						<a href='/launch'>Launch</a>
						<a href='/betadex'>BetaDex</a>
						<a href='/login'>Login</a>
						<a href='https://support.MINTLAB.io' target='_blank'>
							Support
						</a>
					</div>
				</div>
				<div className='Footer_about__y4mOI'>
					<div className='Footer_title__YGI9Q'>About Us</div>
					<p>
						{LOGO} is a marketplace for Cardano Non-Fungible Tokens, launched in
						July 2021 from a team decentralised across the world, we can
						officially say we are the first marketplace on Cardano. We will be
						adding loads of new features over the next few months so be sure to
						check back. If you need any help or support reach out to a member of
						the team on one of our social media channels.
					</p>
				</div>
				<div className='Footer_social__1VNGf'>
					<div className='Footer_socialIcons__2CRF0'>
						<div className='Footer_title__YGI9Q'>Connect</div>
						<div className='Footer_icons__1kJgl'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 512 512'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
							</svg>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 448 512'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
							</svg>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 576 512'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'></path>
							</svg>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 640 512'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z'></path>
							</svg>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 496 512'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
							</svg>
						</div>
					</div>
					<div className='Footer_newsLetter__1iSXa'>
						<div className='Footer_title__YGI9Q'>Subscribe</div>
						<div className='Footer_subscribeTxt__3fvT1'>
							Sign up to our mailing list and receive up-to-date info on new
							releases.
						</div>
						<form className='Footer_subscribeForm__2XsgQ'>
							<div className='Input_Input__1AsHZ'>
								<label className='Input_Label__3ZFOU'></label>
								<input
									type='text'
									placeholder='Name'
									value=''
									className='Input_InputElement__1OHhp'
								/>
							</div>
							<div className='Input_Input__1AsHZ'>
								<label className='Input_Label__3ZFOU'></label>
								<input
									type='email'
									placeholder='Email Address'
									value=''
									className='Input_InputElement__1OHhp'
								/>
							</div>
							<button
								disabled=''
								className='Button_button__3-u4P Button_primary__24KWs Button_disabled__3-vAf'>
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className='Footer_footerSm__2sBWP'>
				<div>© 2021 {LOGO}</div>
				<div>Terms of Service</div>
				<div>Fees and Commission</div>
			</div>
			<div className='Modal_Modal__1oZvs'>
				<div className='Footer_terms__219XY'>
					<div className='Footer_title__YGI9Q'>Terms of Service</div>
					<div className='Footer_pad__sjthw'>
						<div className='Footer_body__2-0gR'>
							<p>
								Welcome to MINTLAB.IO a non-custodial NFT marketplace, your
								one-stop-shop for buying and selling Cardano NFTs! We like to
								keep things simple around here but there are some important
								things you should be aware of:
							</p>
							<p>
								1. We are a non-custodial NFT resale solution, as such
								MINTLAB.IO does not market its own NFTs or sell on behalf of
								others.
							</p>
							<p>
								2. Sellers can link their Cardano wallets to their account and
								then select an NFT or selection of NFTs to list for sale. These
								NFTs remain in the sellers wallet at all times until a buyer is
								found and the purchase confirmed. At no point will anyone from
								MINTLAB.IO contact you and ask you to send your NFT or your ADA
								outside of a live sale. If in doubt please contact us. Please
								report any suspicious activity or messages to us without delay.
							</p>
							<p>
								3. All NFTs are listed by community members, as with all second
								hand sales BUYER BEWARE. You are advised to do your own research
								BEFORE buying any NFT. Please confirm that the policy ID and
								other data match the project you are intending to buy. If there
								is any doubt please direct any such queries to the project who
								first minted the NFT, they are best placed to help you make an
								informed decision.
							</p>
							<p>
								4. MINTLAB.IO is acting as a non-custodial technology service
								provider only. As we are only an intermediary linking sellers
								with buyers only there is a strict no refund policy for any
								reason. We simply have no control over the seller once a
								purchase is complete.
							</p>
							<p>
								5. The buying and selling of digital artwork and NFTs remains
								largely unregulated but you are advised to check the laws in
								your country before buying or selling any NFTs. You may wish to
								consult with a lawyer.
							</p>
							<p>
								6. MINTLAB.IO is comprised of a global team of developers but
								our business is entity is registered in the Seychelles. We have
								adopted a privacy first approach to business, as such any data
								stored with us is extremely secure.
							</p>
							<p>
								7. We hope everyone will continue to use this platform for the
								right purposes, however any spamming, offensive material or
								unlawful activity will result in an immediate, permanent ban
								without warning.
							</p>
							<p>
								8. To remain compliant with current AML &amp; KYC laws in the
								USA, UK and Europe we have implemented KYC checks for all buyers
								are sellers with transactions totalling 10,000 Euros. This is a
								cumulative figure. There is no KYC requirement for accounts
								spending less than 10,000 Euros. Any collected data is stored
								securely and will be used for AML &amp; KYC purposes only. Be
								assured only the minimum data required will be requested. We
								will never sell or pass such data on.
							</p>
							<p>
								9. By using our service you are agreeing to the above terms of
								service as well as our fees which are detailed on the fees &amp;
								commission page.
							</p>
							<p>
								10. We reserve the right to amend these terms at any time
								without prior warning.
							</p>
						</div>
					</div>
					<div className='Footer_bottom__2x9TO'>
						<button className='Button_button__3-u4P Button_secondary__APbMn'>
							Close
						</button>
					</div>
				</div>
			</div>
			<div className='Modal_Modal__1oZvs'>
				<div className='Footer_fees__2AaHW'>
					<div className='Footer_title__YGI9Q'>FEES AND COMMISSION</div>
					<div className='Footer_pad__sjthw'>
						<div className='Footer_body__2-0gR'>
							<p>
								Welcome to V1 of MINTLAB.IO. By listing any NFT or buying any
								NFT you are agreeing fully to our Fees &amp; Commission
								structure as well as our main Terms of Service.
							</p>
							<p>
								1. There is a minimal network ‘dust’ fee to link each wallet to
								your account, none of which is retained by MINTLAB.IO.
							</p>
							<p>2. There is no fee to list or de-list an NFT.</p>
							<p>
								3. There is no cost to create an account or ongoing membership
								fee.
							</p>
							<p>
								4. We charge 2.5% commission (min 1 ADA) on each successful NFT
								sale. This will be deducted from the sellers ADA amount.
							</p>
							<p>
								5. In addition there are Cardano network transaction fees, which
								will vary over time, none of which are retained by MINTLAB.IO.
								These fees will also be deduced from the sellers ADA amount.
							</p>
							<p>
								By way of a simple example: A seller lists a Cardano NFT for 100
								ADA and a buyer is found. The buyer sends 100 ADA. The retained
								MINTLAB.IO commission is 2.5 ADA and the network fee is 1.7 ADA.
								Thus the seller will receive 95.8 ADA.
							</p>
							<p>
								6. For any abortive transactions for any reason the seller will
								receive their ADA back minus the network TX fee. It is simply
								not possible to avoid this fee.
							</p>
							<p>
								Don't forget when any NFT is sent there is the Cardano network
								fee of circa 1.5 ADA. But you will have recieved that amount
								when you were sent the NFT, so to us that is a nil cost for most
								users.
							</p>
							<p>
								All sales are full &amp; final so please ensure you understand
								the commission structure BEFORE selling any NFTs.
							</p>
						</div>
					</div>
					<div className='Footer_bottom__2x9TO'>
						<button className='Button_button__3-u4P Button_secondary__APbMn'>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
