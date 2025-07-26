
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to HypePad</h1>
      <p>All-in-One Launchpad: Anti-bot, Staking, Referrals</p>
      <div className="home-buttons">
        <Link to="/launch-meme"><button>Launch Meme Coin</button></Link>
        <Link to="/create-token"><button>Create Token</button></Link>
        <Link to="/leaderboard"><button>View Leaderboard</button></Link>
        <Link to="/dashboard-user"><button>User Dashboard</button></Link>
        <Link to="/dashboard-dev"><button>Developer Dashboard</button></Link>
        <Link to="/airdrop"><button>Airdrop Tool</button></Link>
        <Link to="/dao"><button>DAO Voting</button></Link>
        <Link to="/mint-nft"><button>NFT Mint</button></Link>
        <Link to="/cross-promo"><button>Cross Promo</button></Link>
      </div>
    </div>
  );
}

export default Home;
