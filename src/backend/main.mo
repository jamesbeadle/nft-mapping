import Iter "mo:base/Iter";
import Buffer "mo:base/Buffer";
import Principal "mo:base/Principal";
import Array "mo:base/Array";
actor {
  

  type TokenIndex = Nat32;
  type AccountIdentifier__1 = Text;
  type NFT = {
      tokenIndex: TokenIndex;
      accountIdentifier: AccountIdentifier__1;
      canisterId: Text;
      tokenId: Text;
  };

  type UserNFT = {
    number: Nat8;
    owner: Text;
    nnsPrincipal: Text;
    mapped: Bool;
  };

  stable var userNFTs: [UserNFT] = [
    { number = 1; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 2; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 3; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 4; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 5; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 6; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 7; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 8; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 9; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 10; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 11; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 12; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 13; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 14; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 15; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 16; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 17; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 18; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 19; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 20; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 21; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 22; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 23; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 24; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 25; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 26; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 27; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 28; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 29; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 30; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 31; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 32; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 33; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 34; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 35; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 36; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 37; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 38; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 39; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 40; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 41; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 42; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 43; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 44; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 45; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 46; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 47; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 48; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 49; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 50; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 51; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 52; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 53; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 54; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 55; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 56; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 57; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 58; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 59; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 60; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 61; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 62; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 63; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 64; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 65; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 66; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 67; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 68; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 69; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 70; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 71; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 72; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 73; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 74; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 75; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 76; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 77; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 78; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 79; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 80; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 81; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 82; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 83; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 84; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 85; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 86; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 87; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 88; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 89; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 90; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 91; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 92; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 93; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 94; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 95; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 96; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 97; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 98; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 99; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 100; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 101; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 102; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 103; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 104; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 105; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 106; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 107; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 108; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 109; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 110; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 111; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 112; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 113; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 114; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 115; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 116; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 117; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 118; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 119; owner = ""; nnsPrincipal = ""; mapped = false;},
    { number = 120; owner = ""; nnsPrincipal = ""; mapped = false;}
  ];

  public shared ({caller}) func mapNFTs(nnsPrincipal: Text) {
    
    let owner = Principal.toText(caller);
    
    let nfts = await getNFTs();

    for(nft in Iter.fromArray(nfts)){
      if(nft.accountIdentifier == owner){
        mapNFT(nft.accountIdentifier, nnsPrincipal);
      }
    };
  };

  private func mapNFT(accountIdentifier: Text, nnsPrincipal: Text){

    let updatedNFTsBuffer = Buffer.fromArray<UserNFT>([]);
    for(nft in Iter.fromArray(userNFTs)){
      if(nft.owner == accountIdentifier){
        updatedNFTsBuffer.add({
          number = nft.number; owner = nft.owner; nnsPrincipal = nnsPrincipal; mapped = true; 
        });
      }
      else{
        updatedNFTsBuffer.add(nft);
      }
    };

    userNFTs := Buffer.toArray(updatedNFTsBuffer);
  };

  public shared query ({caller}) func getMappedNFTs(): async [UserNFT] {
    return userNFTs;
  };

  public func getNFTs() : async [NFT] {
    let nft_canister = actor ("ikuez-baaaa-aaaap-abf3q-cai"): actor { 
      getRegistry: () -> async [(Nat32, Text)];
    };

    let registryRecords = await nft_canister.getRegistry();

    let registry = Array.map<(Nat32, Text), NFT>(registryRecords, updateFn);

    return registry;
  };

  let updateFn = func(nft: (Nat32, Text)): NFT {
    return {
          tokenIndex = nft.0;
          accountIdentifier = nft.1;
          canisterId = "";
          tokenId = "";
        };
  };

  
};