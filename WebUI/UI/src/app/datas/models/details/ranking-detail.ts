export class RankingDetail {
  constructor(rankingQuestionId: number, rank: number, title: string) {
    this.rankingQuestionId = rankingQuestionId;
    this.rank = rank;
    this.title = title;
  }

  rankingDetailId: number;
  rankingQuestionId: number;
  rank: number;
  title: string;
}
