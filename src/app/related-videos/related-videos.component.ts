import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-related-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './related-videos.component.html',
  styleUrl: './related-videos.component.css'
})
export class RelatedVideosComponent {
  @Output() videoSelected = new EventEmitter<any>(); // Emit selected video details

  relatedVideos = [
    { title: 'Video Segment 1', path: 'assets/videos/FULL_STACK_9_PART_1.mp4' },
    { title: 'Video Segment 2', path: 'assets/videos/FULL_STACK_9_PART_2.mp4' },
    { title: 'Video Segment 3', path: 'assets/videos/FULL_STACK_9_PART_3.mp4' },
    { title: 'Video Segment 4', path: 'assets/videos/FULL_STACK_9_PART_4.mp4' },
  ];

  selectVideo(video: any): void {
    this.videoSelected.emit(video);
  }

}
