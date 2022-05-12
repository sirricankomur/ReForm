export class Question {

    constructor(questionTypeId: number, formId: number,  title: string, description: string, questionOrder: number) {
        this.questionTypeId = questionTypeId;
        this.formId = formId;
        this.title = title; 
        this.description = description;
        this.questionOrder = questionOrder;    
    }

    id: number;
    questionTypeId: number;
    formId: number;
    title: string;
    description: string;
    questionOrder: number;
}
