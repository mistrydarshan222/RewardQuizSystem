@extends('layout.master')

@push('plugin-styles')
<meta name="csrf-token" content="{{ csrf_token() }}" />

    <link href="{{ asset('assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css') }}" rel="stylesheet" />
@endpush

@section('content')
    <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
            <h4 class="mb-3 mb-md-0">Order Details</h4>
        </div>
    </div>   

    <div class="row">
        <div class="col-md-9 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Orders List</h6>

                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Player Name</th>
                                    <th>Player Email</th>
                                    <th>Player Phone</th>
                                    <th>Product Name</th>
                                    <th>Product Image</th>
                                    <th>Coins</th>
                                    <th>Status</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                {{-- <img src="{{ asset("images/$item->image") }}" /> --}}
                              {{-- @foreach ($orders as $item) --}}
                              @for ($i = 0; $i < count($orderDetails); $i++)
                              
                              <tr id="data{{$orderDetails[$i]['order_id']}}">
                                <th>{{$orderDetails[$i]['order_id']}}</th>
                                <td id="playername">{{$orderDetails[$i]['Player_name']}}</td> 
                                <td id="playeremail">{{$orderDetails[$i]['Player_email']}}</td> 
                                <td id="playerphone">{{$orderDetails[$i]['Player_phonenumber']}}</td>
                                <td id="productname">{{$orderDetails[$i]['Product_name']}}</td>                                 
                                <td id="productimage">
                                    <?php $img = $orderDetails[$i]['Product_image']; ?>
                                    <img src="{{ asset('images/'.$img) }}" />
                                </td> 
                                <td id="productname">{{$orderDetails[$i]['Product_coins']}}</td>                               
                                <td>
                                    <div id="{{$orderDetails[$i]['order_id']}}" class="dropdown" onchange="statusupdate(event)">
                                        <select class="btn btn-secondary  dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <option class="dropdown-item" {{$orderDetails[$i]['order_status'] == "Pending" ? "selected" : ""}}  href="#">Pending</option>
                                            <option class="dropdown-item" {{$orderDetails[$i]['order_status'] == "Approved" ? "selected" : ""}} href="#">Approved</option>
                                            <option class="dropdown-item" {{$orderDetails[$i]['order_status'] == "Rejected" ? "selected" : ""}} href="#">Rejected</option>
                                        </select>                                     
                                      </div>
                                </td>
                                </tr>


                                @endfor
                                


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('plugin-scripts')
    <script src="{{ asset('assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/apexcharts/apexcharts.min.js') }}"></script>
@endpush

@push('custom-scripts')
    <script src="{{ asset('assets/js/dashboard.js') }}"></script>
    <script src="{{ asset('assets/js/datepicker.js') }}"></script>

    {{-- <script>
        function EditData(id){
            const main = document.querySelector(`#data${id}`);

            const name = main.querySelector("#name").innerText;
            const image = main.querySelector("#image img").src;
            const description = main.querySelector("#description").innerText;
            const coins = main.querySelector("#coins").innerText;  
            
            const editname = document.querySelector('#editform').name;
            const editid = document.querySelector('#editform').id;
            const displayimg = document.querySelector('#displayimg');
            const editdescription = document.querySelector('#editform').description;
            const editcoins = document.querySelector('#editform').coins;
            editid.value = id;
            editname.value = name;
            displayimg.src = image;
            editdescription.value = description;
            editcoins.value = coins;            
            
        }
        function DeleteData(url){
            let text = "Press a button!\nEither OK or Cancel.";
            if (confirm(text) == true) {
                window.location = url;
            } 
            else {               
            }

        }
    </script> --}}
     

    <script>
        function statusupdate(e){

         
            let token = document.querySelector('meta[name="csrf-token"]').content;
            let xhr = new XMLHttpRequest();
            let url = '{{route('orders.update')}} ';

            let formData = new FormData();
            formData.append('status', e.target.value);
  
            formData.append('id', e.currentTarget.id);
           

            xhr.open("POST", url , true);
            xhr.setRequestHeader('X-CSRF-TOKEN', token);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const data = JSON.parse(this.responseText);
                    location.reload();
                }
        };

        xhr.send(formData);



        }
        </script>
@endpush
