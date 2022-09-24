<?php
$Parsedown = new Parsedown();

?>


@extends('layout.master')

@push('plugin-styles')
<meta name="csrf-token" content="{{ csrf_token() }}" />
<link href="{{ asset('assets/plugins/simplemde/simplemde.min.css') }}" rel="stylesheet" />

    <link href="{{ asset('assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css') }}" rel="stylesheet" />
@endpush

@section('content')
    <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
            <h4 class="mb-3 mb-md-0">CATEGORY</h4>
        </div>

    </div>
    <div class="row">
        <div class="col-md-6 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    @if (Session::has('message'))
                        <div class="alert alert-success">
                            <div>{{ Session::get('message') }}</div>
                        </div>
                    @endif


                    <h6 class="card-title"> Form</h6>



                    <form  action='{{ route('quiz.edit.store', [$quiz['id']]) }}' method="POST"
                        enctype="multipart/form-data">
                        @csrf
                        <div class="row mb-3">
                            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">NAME</label>
                            <div class="col-sm-9">
                                <input
                                id="checkchar"

                                name="name" type="text" class="form-control"
                                 value="{{$quiz['name']}}"  placeholder="Enter Quiz Name...">
                            </div>
                        </div>


                        <div class="row mb-3">
                            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Instructions</label>
                            <textarea

                            value="{{$quiz['instruction']}}"
                            name="instructions" class="form-control" name="tinymce" id="simpleMdeExample" rows="10">{{ $quiz['instruction'] }}</textarea>
                        </div>


                        <div class="row mb-3">

                            <?php
                            $quizimg  = $quiz['image'];
                            ?>
                            <img class="mb-5" src="{{ asset("images/$quizimg") }}" />

                            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Image</label>
                            <div class="col-sm-9">
                                <input name="image" type="file" class="form-control"
                                 value=""
                                    placeholder="Enter Category Name...">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Category</label>

                                <select name="category" class="form-select">

                                @foreach ($category as $item)
                                <option value="{{$item['name']}}"

                                {{ ( $item->name == $quiz['category']) ? 'selected' : '' }}
                                >{{$item['name']}}</option>
                                @endforeach

                                </select>

                          </div>


                        <div class="row">
                            <div class="col-md-6">
                                <label for="exampleInputUsername2" class="col-form-label">COINS</label>
                            <div class="col-sm-9">
                                <input name="coins" type="number" class="form-control"
                                value="{{$quiz['coins']}}"
                                    placeholder="Enter Coins...">
                            </div>
                            </div>


                            <div class="col-md-6">
                                <label for="exampleInputUsername2" class=" col-form-label">CHARGES</label>
                            <div class="col-sm-9">
                                <input name="charges" type="number" class="form-control"
                                value="{{$quiz['charges']}}"
                                    placeholder="Enter Coins...">
                            </div>
                            </div>

                        </div>

                        <button type="submit" class="btn btn-primary me-2 mt-3">Submit</button>

                    </form>


                </div>
            </div>
        </div>
    </div>

@endsection

@push('plugin-scripts')
    <script src="{{ asset('assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/apexcharts/apexcharts.min.js') }}"></script>
      <script src="{{ asset('assets/plugins/simplemde/simplemde.min.js') }}"></script>
@endpush

@push('custom-scripts')
    <script src="{{ asset('assets/js/dashboard.js') }}"></script>

    <script src="{{ asset('assets/js/datepicker.js') }}"></script>

    <script>

$(function() {
  'use strict';

  /*simplemde editor*/
  if ($("#simpleMdeExample").length) {
    var simplemde = new SimpleMDE({
      element: $("#simpleMdeExample")[0]
    });
  }

});
        function DeleteData(url) {

            let text = "Are you sure to delete this record? \nEither OK or Cancel.";
            if (confirm(text) == true) {


            console.log(url);

            let token = document.querySelector('meta[name="csrf-token"]').content;
            let xhr = new XMLHttpRequest();

            xhr.open("POST", url , true);

            xhr.setRequestHeader('X-CSRF-TOKEN', token);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const data = JSON.parse(this.responseText);
                    location.reload();
                }
            };
            xhr.send();



        }
    }

    const eventTarget = document.querySelector('#checkchar');
    const name = document.querySelector('#name');
    if(typeof eventTarget !== undefined){
        eventTarget.addEventListener("keydown", FilterTitle);
    }

    if(typeof name !== undefined){
        name.addEventListener("keydown", FilterTitle);
    }
        function FilterTitle(e) {
            console.log( e.target.value);
           const str = e.target.value;
            const noSpecialCharacters = str.replace(/[^a-zA-Z0-9 ]/g, '');
            e.target.value = noSpecialCharacters;

    }
    </script>

@endpush
