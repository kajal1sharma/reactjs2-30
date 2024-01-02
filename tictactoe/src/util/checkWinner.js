function checkWinner(board, currPlayer){

    //row 1
    if(board[0]==currPlayer && board[1]==currPlayer && board[2] ==currPlayer){
        return true;
    }
    else if(board[3]==currPlayer && board[4]==currPlayer && board[5]==currPlayer){
        return true;
    }
    else if(board[6]==currPlayer && board[7]==currPlayer && board[8]==currPlayer){
        return true;
    }
    else if(board[0]==currPlayer && board[3]==currPlayer && board[6]==currPlayer){
        return true;
    }
    else if(board[1]==currPlayer && board[4]==currPlayer && board[7]==currPlayer){
        return true;
    }
    else if(board[2]==currPlayer && board[5]==currPlayer && board[8]==currPlayer){
        return true;
    }
    else if(board[0]==currPlayer && board[4]==currPlayer && board[8]==currPlayer){
        return true;
    }
    else if(board[2]==currPlayer && board[4]==currPlayer && board[6]==currPlayer){
        return true;
    }
    else{
        return false;
    }


}

export default checkWinner;