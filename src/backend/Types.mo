
module Types {


  public type Error = {
    #NotFound;
    #AlreadyExists;
    #NotAuthorized;
    #NotAllowed;
    #DecodeError;
    #InvalidTeamError;
    #InvalidData;
    #SystemOnHold;
  };
};
