<div class="horizontal-menu">
  <nav class="navbar top-navbar">
    <div class="container">
      <div class="navbar-content">
        <a href="{{ route('dashboard') }}" class="navbar-brand">
          Quiz<span> Leo</span>
        </a>

        <ul class="navbar-nav">

       <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img class="wd-30 ht-30 rounded-circle" src="{{ url('https://via.placeholder.com/30x30') }}" alt="profile">
            </a>
            <div class="dropdown-menu p-0" aria-labelledby="profileDropdown">
              <div class="d-flex flex-column align-items-center border-bottom px-5 py-3">
                <div class="mb-3">
                  <img class="wd-80 ht-80 rounded-circle" src="{{ url('https://via.placeholder.com/80x80') }}" alt="">
                </div>
                {{-- <div class="text-center">
                  <p class="tx-16 fw-bolder">Amiah Burton</p>
                  <p class="tx-12 text-muted">amiahburton@gmail.com</p>
                </div> --}}
              </div>
              <ul class="list-unstyled p-1">                

                <li class="dropdown-item py-2">
                  <a href="{{route('logout')}}" class="text-body ms-0">
                    <i class="me-2 icon-md" data-feather="log-out"></i>
                    <span>Log Out</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
          <i data-feather="menu"></i>
        </button>
      </div>
    </div>
  </nav>
  <nav class="bottom-navbar">
    <div class="container">
      <ul class="nav page-navigation">


        {{-- <li class="nav-item {{ active_class([route('dashboard')]) }}">
          <a class="nav-link" href="{{route('dashboard')}}">
            <i class="link-icon" data-feather="box"></i>
            <span class="menu-title">Dashboard</span>
          </a>
        </li> --}}


        
        <li class="nav-item
        {{ Route::currentRouteName() == 'category.index' ? "active" : "" }}
        ">
          <a class="nav-link" href="{{route('category.index')}}">
            <i class="link-icon" data-feather="box"></i>
            <span class="menu-title">Category</span>
          </a>
        </li>

        <li class="nav-item
        {{ Route::currentRouteName() == 'quiz.index' ? "active" : "" }}
        ">
          <a class="nav-link" href="{{route('quiz.index')}}">
            <i class="link-icon" data-feather="box"></i>
            <span class="menu-title">Quiz</span>
          </a>
        </li>
        

        <li class="nav-item
        {{ Route::currentRouteName() == 'products.index' ? "active" : "" }}
        ">
          <a class="nav-link" href="{{route('products.index')}}">
            <i class="link-icon" data-feather="box"></i>
            <span class="menu-title">Product</span>
          </a>
        </li>

        <li class="nav-item 
        {{ Route::currentRouteName() == 'orders.index' ? "active" : "" }}">
          <a class="nav-link" href="{{route('orders.index')}}">
            <i class="link-icon" data-feather="box"></i>
            <span class="menu-title">Orders</span>
          </a>
        </li>

        <li class="nav-item {{ Route::currentRouteName() == 'setting' ? "active" : "" }}">
          <a class="nav-link" href="{{route('setting')}}">
            <i class="link-icon" data-feather="box"></i>
            <span class="menu-title">Setting</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</div>
