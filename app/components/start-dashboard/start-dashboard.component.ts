import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MusicSheetSettingsService } from '../../services/music-sheet-settings-service/music-sheet-settings.service';


@Component({
  selector: 'start-dashboard',
  templateUrl: "app/components/start-dashboard/start-dashboard.component.html",
  styleUrls: ['app/components/start-dashboard/start-dashboard.component.css']
})

export class StartDashboardComponent {
	constructor(
		private router: Router,
		private musicSheetSettingsService: MusicSheetSettingsService) {
		this.tempoValue_ = this.musicSheetSettingsService.getTempo();
		this.beatsPerMeasure_ = this.musicSheetSettingsService.getBeatsPerMeasure();
		this.beatsLength_ = this.musicSheetSettingsService.getBeatLength();
	}

	public startMusic() : void {
		this.setMusicSettings();
		let link = ['/musicSheet'];
  		this.router.navigate(link);
	}

	private setMusicSettings() {
		this.musicSheetSettingsService.setTempo(this.tempoValue_);
		this.musicSheetSettingsService.setBeatsPerMeasure(this.beatsPerMeasure_);
		this.musicSheetSettingsService.setBeatLength(this.beatsLength_);
	}

	private tempoValue_ : number;
	private beatsPerMeasure_ : number;
	private beatsLength_ : number;
}