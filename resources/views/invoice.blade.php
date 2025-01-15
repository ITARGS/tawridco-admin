@php
    use App\Models\Setting;use Carbon\Carbon;$appName = Setting::get_value('app_name');
    if($appName == "" || $appName == null){
        
        $appName = "Tawridco";
    }

    $supportEmail = Setting::get_value('support_email');
    if($supportEmail == "" || $supportEmail == null){
        $supportEmail = "";
    }
    $supportNumber = Setting::get_value('support_number');
    if($supportNumber == "" || $supportNumber == null){
        $supportNumber = "";
    }
    $logo = Setting::get_value('logo');
    $currency = Setting::get_value('currency') ?? '$';
@endphp

@if(Request::route()->getName() == "customerInvoice")
    <html>
    <head>
        <title>Invoice Order - {{ $appName }}</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.css')}}">
        <link rel="stylesheet" href="{{ asset('assets/css/custom/common.css') }}">
        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
    </head>
    <body>
    @endif
    <style>
        address {
            margin-bottom: 1px;
            font-style: normal;
            line-height: 1.42857143;
        }

        p {
            margin: 0 0 0px;
        }

        .invoice {
            position: relative;
            background: #fff;
            border: 1px solid #f4f4f4;
            padding: 20px;
            margin: 10px 25px
        }

        .well {
            min-height: 20px;
            padding: 19px;
            margin-bottom: 20px;
            background-color: #f5f5f5;
            border: 1px solid #e3e3e3;
            border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05)
        }

        @media only screen and (max-width: 600px) {
            .invoice {
                padding: 0px !important;
                margin: 0px !important;
            }
        }
    </style>
    <section class="invoice " id="printMe">

        <div class="d-flex justify-content-between align-items-center flex-wrap">
            <h5 class="page-header">{{ $appName }}</h5>
            <h5 class="page-header">Mo. {{ $supportNumber }}</h5>
        </div>
        <hr>
        <div class="d-flex justify-content-between align-items-center flex-wrap">
            <div class="invoice-col">
                From
                <address>
                    <strong>{{ $appName }}</strong>
                </address>
                <address>
                    Email: {{ $supportEmail }}<br>
                </address>
                <address>
                    Customer Care : {{ $supportNumber }}
                </address>
                <address>
                    Delivery By: {{ $order->delivery_boy_name ?? "" }}
                </address>
            </div>
            <div class="invoice-col">
                Shipping Address
                <address>
                    <strong>{{ $order->user_name ?? "" }}</strong>
                </address>
                <address>
                    {{ $order->order_address ?? "" }}<br>
                </address>
                <address>
                    <strong>{{ $order->order_mobile }} / {{ $order->alternate_mobile }} </strong><br>
                </address>
                <address>
                    <strong>{{ $order->user_email }}</strong><br>
                </address>
            </div>
            <div class=" invoice-col">
                Retail Invoice
                <address>
                    <b>No : </b>#{{ $order->order_item_id }}
                </address>
                <address>
                    <b>Date: </b>{{ \Carbon\Carbon::parse($order->orders_created_at)->format('d-m-y }}
                </address>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-12">
                <div class="well">
                    <div class="row"><strong>Item : {{
echo e( count($order}}</strong></div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="col-md-4">
                            <p>Sold By</p>
                            <strong>{{
echo e( $order->sto}}</strong>
                            <p>Name: {{
echo e( $order->sell}}</p>
                            <p>Email: {{
echo e( $order->selle}}</p>
                            <p>Mobile No. : {{
echo e( $order->seller}}</p>
                        </div>
                        <div class="col-md-3">
                            <strong>
                                <p>Pan Number : {{
echo e( $order->pan}}</p>
                                <p>{{
echo e( $order->t}} : {{
echo e( $order->tax}}</p>
                            </strong>
                            @if(?php
if($order->delivery_)
                                <p>Delivery By : {{
echo e( $order->delivery_boy_nam}}</p>
                            @else
                                <p>Delivery By : Not Assigned</p>
                            @endif
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <p class="h6 ">Product Details:</p>
                        <div class="row">
                            <div class="col-xs-12 table-responsive">
                                <table class="table table-responsive">
                                    <thead class="text-center">
                                    <tr>
                                        <th>Sr No.</th>
                                        <th>Name</th>
                                        <th>Unit</th>
                                        <th>Price</th>
                                        <th>Tax {{
echo e( $c}} (%)</th>
                                        <th>Qty</th>
                                        <th>SubTotal ( {{
echo e( $c}} )</th>
                                    </tr>
                                    </thead>
                                    <tbody class="text-center">
                                    @php?><?php

                                        $total_tax_amount = 0;
                                        $total_quantity = 0;
                                        $total_sub_total = 0;
                            @endphp
                                    @foreach(foreach($order_items as $index )
                                        <tr>
                                            <td>{{
echo e( $}}<br></td>
                                            <td>{{
echo e( $item->produ}}<br></td>
                                            <td>{{
echo e( $item->varia}}<br></td>
                                            <td>{{
echo e( ($item->discounted_price != 0 && $item->discounted_price != "") ? $item->discounted_price : $item}}</td>
                                            <td>{{
echo e( $item->tax_amount. "  (" .$item->tax_percenta}}<br></td>
                                            <td>{{
echo e( $item->q}}<br></td>
                                            <td>{{
echo e( $item->su}}<br></td>
                                            @php?><?php

                                                $total_tax_amount = $total_tax_amount + $item->tax_amount;
                                                $total_quantity = $total_quantity + $item->quantity;
                                                $total_sub_total = $total_sub_total + $item->sub_total;
                                    @endphp
                                        </tr>
                                    @endforeach
                                    </tbody>
                                    <tfoot class="text-center">
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>Total</th>
                                        <td>{{
echo e( $total_tax}}<br></td>
                                        <td>{{
echo e( $total_q}}<br></td>
                                        <td>{{
echo e( $total_su}}<br></td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <p><b>Payment Method : </b> {{
echo e( strtoupper($order->payment_}}</p>
            <!--accepted payments column
            <div class="col-xs-6 col-xs-offset-6">
            <p class="lead">Payment Date: </p>-->
            <div class="table-responsive">
                <table>
                    <tbody>
                    <tr>
                        <th>Total Order Price ({{
echo e( $c}})</th>
                        <td>{{
echo e( $order}}</td>
                    </tr>
                    <tr>
                        <th>Delivery Charge ({{
echo e( $c}})</th>
                        <td>{{
echo e( $order->delivery}}</td>
                    </tr>
                    <tr>
                        <th>Discount {{
echo e( $c}} (%)</th>
                        @php?><?php

                            $discount_in_rupees = 0;
                            if ( $order->discount > 0) {
                                $discounted_amount = $order->total * $order->discount / 100;
                                $final_total = $order->total - $discounted_amount;
                                $discount_in_rupees = $order->total - $final_total;
                            }
                @endphp
                        <td>{{
echo e( '- ' . $discount_in_rupees . ' (' . $order->discoun}}</td>
                    </tr>
                    <tr>
                        <th>Promo ({{
echo e( $order->pro}}) Discount ({{
echo e( $c}})</th>
                        <td>{{
echo e( '- ' . $order->promo_d}}</td>
                    </tr>
                    <tr>
                        <th>Wallet Used ({{
echo e( $c}})</th>
                        <td>{{
echo e( '- ' . $order->wallet_}}</td>
                    </tr>
                    <tr>
                        <th>Final Total ({{
echo e( $c}})</th>
                        <td>{{
echo e( '= ' . $order->fin}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    @if(?php
if(Request::route()->getName() == "customer)
    </body>
    </html>
@endif
