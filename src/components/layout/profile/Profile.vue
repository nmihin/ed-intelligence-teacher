<template>      
        <!-- User Profile -->
        <div class="user-profile">
          <div class="profile-tag">
            <img src="../../../assets/img/users/avatar-1.jpg" alt="User">
            <span>Reanna</span>
            <i class="icon icon-arrow"></i>
          </div>
          <div class="user-menu">
            <ul>
              <li>
                <router-link to="/profile-settings">
                  <i class="icon icon-profile"></i>
                  <span>My Profile</span>
                </router-link>
              </li>
              <li>
                <a href="#">
                  <i class="icon icon-settings"></i>
                  <span>User Settings</span>
                </a>
              </li>
              <li>
                <router-link to="/change-password">
                  <i class="icon icon-m-password"></i>
                  <span>Change Password</span>
                </router-link>
              </li>
              <li>
                <router-link to="/notifications">
                  <i class="icon icon-m-notification"></i>
                  <span>Notifications</span>
                </router-link>
              </li>
              <li>
                <a href="#">
                  <i class="icon icon-logout"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- user-profile-END -->
</template>