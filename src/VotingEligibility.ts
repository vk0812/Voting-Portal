
export class VotingEligibility{
    static canVote:boolean = true;


    static hasCastVote():void{
        VotingEligibility.canVote = false
        console.log(12)

    }





}