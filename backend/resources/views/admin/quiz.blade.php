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

                    <form action="{{ route('quiz.store') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="row mb-3">
                            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">NAME</label>
                            <div class="col-sm-9">
                                <input
                                 name="name"
                                 id="checkchar"
                                type="text" class="form-control" placeholder="Enter Quiz Name...">
                            </div>
                        </div>


                        <div class="row mb-3">
                            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Instructions</label>
                            <textarea name="instructions" class="form-control" name="tinymce" id="simpleMdeExample" rows="10"></textarea>
                        </div>


                        <div class="row mb-3">
                            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Image</label>
                            <div class="col-sm-9">
                                <input name="image" type="file" class="form-control"
                                    placeholder="Enter Category Name...">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Category</label>
                            <div class="col-sm-9">
                                <select name="category" class="form-select">

                                    @foreach ($category as $item)
                                        <option value="{{ $item['name'] }}">{{ $item['name'] }}</option>
                                    @endforeach

                                </select>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-md-6">
                                <label for="exampleInputUsername2" class="col-sm-3 col-form-label">COINS</label>
                                <div class="col-sm-9">
                                    <input name="coins" type="number" class="form-control" placeholder="Enter Coins...">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="exampleInputUsername2" class="col-sm-3 col-form-label" >Charges Coins</label>
                                <div class="col-sm-12">
                                <input name="charges" type="number" class="form-control" placeholder="Enter Coins..." value="10">
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary me-2 mt-3">Submit</button>

                    </form>

                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-9 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Category List</h6>

                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Instructions</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($quiz as $item)
                                    <tr>
                                        <th>1</th>
                                        <td>{{ $item->name }}</td>
                                        <td>
                                            <img src="{{ asset("images/$item->image") }}" />
                                        </td>



                                        <td>
                                            <div class="icons-list row"  >
                                                <div

                                                onclick="AddData('{{ route('que.index', [$item->name]) }}')"
                                                class="col-md-4 col-sm-12 bg-transparent justify-content-center"> <i
                                                        data-feather="plus-square"></i>
                                            </div>
                                                <div
                                                onclick="EditQuiz('{{ route('quiz.edit.index', [$item->id]) }}')"
                                                class="col-md-4 col-sm-12 bg-transparent justify-content-center"
                                                    data-bs-toggle="modal" id="modalBTN" data-bs-target="#editmodal"> <i
                                                        data-feather="edit"></i> </div>
                                                <div
                                                onclick="DeleteData('{{ route('quiz.delete', [$item->id]) }}')"
                                                    class="col-md-4  col-sm-12 bg-transparent justify-content-center ">
                                                    <i data-feather="x"></i>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                @endforeach


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
                    toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "preview","fullscreen"],
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

                xhr.open("POST", url, true);

                xhr.setRequestHeader('X-CSRF-TOKEN', token);

                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        const data = JSON.parse(this.responseText);
                        location.reload();
                    }
                };
                xhr.send();



            }
        }

        function EditQuiz(url) {
            window.location.href = url;

        }


        function DeleteData(url) {
            if (confirm("Press a button!") == true) {
                    window.location.href = url;
                } else {

            }
        }


        function AddData(url) {
            window.location.href = url;
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
