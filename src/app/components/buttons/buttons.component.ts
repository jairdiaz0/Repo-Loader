import { NgFor, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';

/**Loader - Model */
import { LoaderModelComponent } from "../shared/loader-model/loader-model.component";

/**Loaders */
import { Loader1Component } from "../shared/loader-1/loader-1.component";
import { Loader2Component } from "../shared/loader-2/loader-2.component";
import { Loader3Component } from "../shared/loader-3/loader-3.component";
import { Loader4Component } from "../shared/loader-4/loader-4.component";
import { Loader5Component } from "../shared/loader-5/loader-5.component";
import { Loader6Component } from "../shared/loader-6/loader-6.component";
import { Loader7Component } from "../shared/loader-7/loader-7.component";
import { Loader8Component } from "../shared/loader-8/loader-8.component";
import { Loader9Component } from "../shared/loader-9/loader-9.component";
import { Loader10Component } from "../shared/loader-10/loader-10.component";
import { Loader11Component } from "../shared/loader-11/loader-11.component";
import { Loader12Component } from "../shared/loader-12/loader-12.component";
import { Loader13Component } from "../shared/loader-13/loader-13.component";
import { Loader14Component } from "../shared/loader-14/loader-14.component";
import { Loader15Component } from "../shared/loader-15/loader-15.component";
import { Loader16Component } from "../shared/loader-16/loader-16.component";
import { Loader17Component } from "../shared/loader-17/loader-17.component";
import { Loader18Component } from "../shared/loader-18/loader-18.component";
import { Loader19Component } from "../shared/loader-19/loader-19.component";
import { Loader20Component } from "../shared/loader-20/loader-20.component";
import { Loader21Component } from "../shared/loader-21/loader-21.component";
import { Loader22Component } from "../shared/loader-22/loader-22.component";
import { Loader23Component } from "../shared/loader-23/loader-23.component";
import { Loader24Component } from "../shared/loader-24/loader-24.component";
import { Loader25Component } from "../shared/loader-25/loader-25.component";
import { Loader26Component } from "../shared/loader-26/loader-26.component";
import { Loader27Component } from "../shared/loader-27/loader-27.component";
import { Loader28Component } from "../shared/loader-28/loader-28.component";
import { Loader29Component } from "../shared/loader-29/loader-29.component";
import { Loader30Component } from "../shared/loader-30/loader-30.component";
import { Loader31Component } from "../shared/loader-31/loader-31.component";
import { Loader32Component } from "../shared/loader-32/loader-32.component";
import { Loader33Component } from "../shared/loader-33/loader-33.component";
import { Loader34Component } from "../shared/loader-34/loader-34.component";
import { Loader35Component } from "../shared/loader-35/loader-35.component";
import { Loader36Component } from "../shared/loader-36/loader-36.component";
import { Loader37Component } from "../shared/loader-37/loader-37.component";
import { Loader38Component } from "../shared/loader-38/loader-38.component";
import { Loader39Component } from "../shared/loader-39/loader-39.component";
import { Loader40Component } from "../shared/loader-40/loader-40.component";
import { Loader41Component } from "../shared/loader-41/loader-41.component";
import { Loader42Component } from "../shared/loader-42/loader-42.component";
import { Loader43Component } from "../shared/loader-43/loader-43.component";
import { Loader44Component } from "../shared/loader-44/loader-44.component";
import { Loader45Component } from "../shared/loader-45/loader-45.component";
import { Loader46Component } from "../shared/loader-46/loader-46.component";
import { Loader47Component } from "../shared/loader-47/loader-47.component";

/**Components */
import { ButtonsCardComponent } from "../buttons-card/buttons-card.component";

// Crear un tipo para los loaders
type LoaderKeys = `loader_${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
  11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
  21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
  31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 |
  41 | 42 | 43 | 44 | 45 | 46 | 47}`;

@Component({
  selector: 'app-buttons',
  imports: [
    NgFor,
    LoaderModelComponent,
    Loader1Component,
    Loader2Component,
    Loader3Component,
    Loader4Component,
    Loader5Component,
    Loader6Component,
    Loader7Component,
    Loader8Component,
    Loader9Component,
    Loader10Component,
    Loader11Component,
    Loader12Component,
    Loader13Component,
    Loader14Component,
    Loader15Component,
    Loader25Component,
    Loader24Component,
    Loader23Component,
    Loader22Component,
    Loader21Component,
    Loader20Component,
    Loader18Component,
    Loader19Component,
    Loader17Component,
    Loader16Component,
    Loader26Component,
    Loader27Component,
    Loader28Component,
    Loader29Component,
    Loader30Component,
    Loader31Component,
    Loader32Component,
    Loader33Component,
    Loader34Component,
    Loader35Component,
    Loader36Component,
    Loader37Component,
    Loader38Component,
    Loader39Component,
    Loader40Component,
    Loader41Component,
    Loader42Component,
    Loader43Component,
    Loader44Component,
    Loader45Component,
    Loader46Component,
    Loader47Component, ButtonsCardComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  /**Switch */
  changeBackgroundColor: boolean = false;

  /**Loaders */
  loader_1?: boolean;
  loader_2?: boolean;
  loader_3?: boolean;
  loader_4?: boolean;
  loader_5?: boolean;
  loader_6?: boolean;
  loader_7?: boolean;
  loader_8?: boolean;
  loader_9?: boolean;
  loader_10?: boolean;
  loader_11?: boolean;
  loader_12?: boolean;
  loader_13?: boolean;
  loader_14?: boolean;
  loader_15?: boolean;
  loader_16?: boolean;
  loader_17?: boolean;
  loader_18?: boolean;
  loader_19?: boolean;
  loader_20?: boolean;
  loader_21?: boolean;
  loader_22?: boolean;
  loader_23?: boolean;
  loader_24?: boolean;
  loader_25?: boolean;
  loader_26?: boolean;
  loader_27?: boolean;
  loader_28?: boolean;
  loader_29?: boolean;
  loader_30?: boolean;
  loader_31?: boolean;
  loader_32?: boolean;
  loader_33?: boolean;
  loader_34?: boolean;
  loader_35?: boolean;
  loader_36?: boolean;
  loader_37?: boolean;
  loader_38?: boolean;
  loader_39?: boolean;
  loader_40?: boolean;
  loader_41?: boolean;
  loader_42?: boolean;
  loader_43?: boolean;
  loader_44?: boolean;
  loader_45?: boolean;
  loader_46?: boolean;
  loader_47?: boolean;
  // Creamos las claves dinámicamente
  loaderKeys: LoaderKeys[] = Array.from({ length: 47 }, (_, i) => `loader_${i + 1}` as LoaderKeys);


  // Método para mostrar y ocultar un loader
  showLoader(loaderName: LoaderKeys): void {
    this[loaderName] = true;
    setTimeout(() => {
      this[loaderName] = false;
    }, 5000);
  }

  // Método trackBy para optimizar el rendimiento del *ngFor
  trackByIndex(index: number, item: any): number {
    return index;
  }
}
