import { Component, OnInit } from '@angular/core';
import { AboutModel } from './about.model';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  aboutme: AboutModel[] = [
    new AboutModel('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=1100&h=600&s=1', 'Goa,INDIA', 'Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.','https://www.google.com/maps/place/Goa/@15.347038,73.7321127,10z/data=!3m1!4b1!4m5!3m4!1s0x3bbfba106336b741:0xeaf887ff62f34092!8m2!3d15.2993265!4d74.123996','Goa'),
    new AboutModel('https://etimg.etb2bimg.com/photo/73411431.cms', 'Hyderabad,INDIA', 'Hyderabad is the capital of southern Indias Telangana state. A major center for the technology industry, its home to many upscale restaurants and shops. Its historic sites include Golconda Fort, a former diamond-trading center that was once the Qutb Shahi dynastic capital. The Charminar, a 16th-century mosque whose 4 arches support towering minarets, is an old city landmark near the long-standing Laad Bazaar.','https://www.google.com/maps/place/Goa/@15.347038,73.7321127,10z/data=!3m1!4b1!4m5!3m4!1s0x3bbfba106336b741:0xeaf887ff62f34092!8m2!3d15.2993265!4d74.123996','Hyderabad'),
    new AboutModel('https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg', 'Mumbai,INDIA', 'Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, its Indias largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The citys also famous as the heart of the Bollywood film industry.','https://www.google.com/maps/place/Goa/@15.347038,73.7321127,10z/data=!3m1!4b1!4m5!3m4!1s0x3bbfba106336b741:0xeaf887ff62f34092!8m2!3d15.2993265!4d74.123996','Mumbai')


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
