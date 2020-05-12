import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  options = {easy: 'Easy', medium: 'Medium', hard: 'hard'};
  optionsOrder = ['easy', 'medium', 'hard'];
  name = '';
  mode = 'easy';
  save = false;
  error = '';
  startedGame = false;
  answers = {a: 'Réponse A', b: 'Réponse B', c: 'Réponse C', d: 'Réponse D'};
  answersOrder = ['a', 'b', 'c', 'd'];
  selectedAnswer: string = null;

  constructor() {}

  start() {
    if (!this.name || this.name.length < 3) {
      this.error = 'Le pseudo doit faire au moins 3 caractères.';
      return;
    }
    if (!this.mode || this.mode.length === 0) {
      this.error = 'Veuillez choisir une difficulté.'
    }
    this.startedGame = true;
  }

  selectAnswer(anwser: string) {
    this.selectedAnswer = anwser;
  }
}
