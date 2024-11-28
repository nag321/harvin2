import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-video',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './main-video.component.html',
  styleUrl: './main-video.component.css'
})
export class MainVideoComponent {
  @Input() videoSrc: string = 'assets/videos/FULL_STACK_9.mp4'; // Default video
  @Input() videoTitle: string = 'Main Video Title'; // Default title
  @Input() videoDescription: string = 'Description of the main video.';

  // Method to play the selected video in the main section
  playVideo(path: string): void {
    const mainVideoElement = document.querySelector('video') as HTMLVideoElement;
    if (mainVideoElement) {
      mainVideoElement.src = path; // Updates the video source
      mainVideoElement.load();    // Loads the new video
      mainVideoElement.play();    // Plays the video
    } else {
      console.error('Main video element not found.');
    }
  }

}
