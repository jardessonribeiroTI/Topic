import { Topic } from "../models/Topic";

class TopicView {

  static viewTopics(topics: Topic[]){
    const topicsView = topics.map(topic => {
      return this.viewTopic(topic);
    })

    return topicsView;
  }

  static viewTopic(topic: Topic): Topic{
    return {
      situation: this.defineSituation(topic.upVotes, topic.downVotes),
      ...topic,
      user: null,
      comments: []
    }
  }

  private static defineSituation(upVotes: number, downVotes: number): string{
    if(upVotes > downVotes){
      return "Positiva"
    }else if(downVotes > upVotes){
      return "Negativa"
    }else{
      return "Empate em votos"
    }
  }
}


export { TopicView };
