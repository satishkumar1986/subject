import { Component } from '@angular/core';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'sassApp';

    ngOnInit() {
        console.log('NgOnInit Called!!')

        // Subject Example
        // let mySubject = new Subject()

        // mySubject.next('Video Notification - 1')

        // const subscribeSatish = mySubject.subscribe(res => {
        //     console.log('youTube Channel Subscribe by Satish : ' + res)
        // })

        // mySubject.next('Video Notification - 2')

        // mySubject.subscribe(res => {
        //     console.log('youTube Channel Subscribe by Aryan : ' + res)
        // })

        // mySubject.next('Video Notification - 3')

        // subscribeSatish.unsubscribe()

        // mySubject.next('Video Notification - 4')


        //Subject Replay Example
        //let myRepSub = new ReplaySubject()
        let myRepSub = new ReplaySubject(2)
        // myRepSub.next('Video Notification - 11')
        // myRepSub.next('Video Notification - 12')
        // myRepSub.next('Video Notification - 13')
        // myRepSub.next('Video Notification - 14')
        // myRepSub.next('Video Notification - 15')

        // const subscribeSahil = myRepSub.subscribe(res=>{
        //   console.log('youTube Channel Subscribe by Sahil : ' + res)
        // })

        // myRepSub.next('Video Notification - 16')

        // const subscribeRinku = myRepSub.subscribe(res=>{
        //   console.log('youTube Channel Subscribe by Rinku : ' + res)
        // })

        // subscribeSahil.unsubscribe()

        // myRepSub.next('Video Notification - 17')


        // Behaviour Subject

        // let myBehSub = new BehaviorSubject('Video Notification - 21')

        // const subSankar = myBehSub.subscribe(res=>{
        //   console.log('youTube Channel Subscribe by Sankar : ' + res)
        // })

        // myBehSub.next('Video Notification - 22')       

        // let subRadha =  myBehSub.subscribe(res=>{
        //   console.log('youTube Channel Subscribe by Radha : ' + res)
        // })

        // myBehSub.next('Video Notification - 23')

        // subSankar.unsubscribe()

        // myBehSub.next('Video Notification - 24')


        // asObservable

        let subtoNormalObser = new Subject()        

        subtoNormalObser.subscribe(res=>{
          console.log(res)
        })

        subtoNormalObser.next('satish line 90')

        var obs = subtoNormalObser.asObservable()        

        obs.subscribe(ress=>{
          console.log('Hi ' + ress)
        })

        subtoNormalObser.next('sahil')

        

    }

}
